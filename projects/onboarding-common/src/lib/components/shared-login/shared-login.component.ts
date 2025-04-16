import { Component,EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'onboarding-common-shared-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shared-login.component.html',
  styleUrl: './shared-login.component.less'
})
export class SharedLoginComponent {
  loginForm: FormGroup;

  @Input() showAdultCheck: boolean = false;
  @Output() credentialsSubmitted = new EventEmitter<{ username: string; password: string; age?: number }>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      ...(this.showAdultCheck && {
        age: [null, [Validators.required, this.adultValidator]]
      })
    });
  }

  adultValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value !== null && value >= 18 ? null : { notAdult: true };
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.credentialsSubmitted.emit(this.loginForm.value);
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched(); // para mostrar errores si faltan campos
    }
  }
}

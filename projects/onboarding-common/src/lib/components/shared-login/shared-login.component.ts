import { Component,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'onboarding-common-shared-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shared-login.component.html',
  styleUrl: './shared-login.component.less'
})
export class SharedLoginComponent {
  loginForm: FormGroup;

  @Output() credentialsSubmitted = new EventEmitter<{ username: string; password: string }>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.credentialsSubmitted.emit(this.loginForm.value);
    }
  }
}

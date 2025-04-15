import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingCommonComponent } from './onboarding-common.component';

describe('OnboardingCommonComponent', () => {
  let component: OnboardingCommonComponent;
  let fixture: ComponentFixture<OnboardingCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

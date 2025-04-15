import { TestBed } from '@angular/core/testing';

import { OnboardingCommonService } from './onboarding-common.service';

describe('OnboardingCommonService', () => {
  let service: OnboardingCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

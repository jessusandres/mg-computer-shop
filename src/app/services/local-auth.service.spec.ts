import { TestBed } from '@angular/core/testing';

import { LocalAuthService } from './local-auth.service';

describe('AuthService', () => {
  let service: LocalAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthStateProvider } from './auth-state.provider';

describe('AuthStateService', () => {
  let service: AuthStateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

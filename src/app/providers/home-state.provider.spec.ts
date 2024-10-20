import { TestBed } from '@angular/core/testing';

import { HomeStateProvider } from './home-state.provider';

describe('HomeStateService', () => {
  let service: HomeStateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeStateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

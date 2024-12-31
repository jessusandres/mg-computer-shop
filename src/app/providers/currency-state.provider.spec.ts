import { TestBed } from '@angular/core/testing';

import { CurrencyStateProvider } from './currency-state.provider';

describe('CurrencyStateService', () => {
  let service: CurrencyStateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyStateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

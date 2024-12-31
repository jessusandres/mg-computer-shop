import { TestBed } from '@angular/core/testing';

import { CartStateProvider } from './cart-state.provider';

describe('CartStateService', () => {
  let service: CartStateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartStateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProductsStateProvider } from './products-state.provider';

describe('ProductsStateService', () => {
  let service: ProductsStateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsStateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

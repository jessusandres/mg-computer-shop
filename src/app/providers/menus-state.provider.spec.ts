import { TestBed } from '@angular/core/testing';

import { MenusStateProvider } from './menus-state.provider';

describe('MenusStateService', () => {
  let service: MenusStateProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusStateProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

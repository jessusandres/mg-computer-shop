import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfrontComponent } from './shopfront.component';

describe('ShopfrontComponent', () => {
  let component: ShopfrontComponent;
  let fixture: ComponentFixture<ShopfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopfrontComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

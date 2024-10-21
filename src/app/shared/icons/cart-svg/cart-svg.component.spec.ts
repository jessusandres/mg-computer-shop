import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSvgComponent } from './cart-svg.component';

describe('CartSvgComponent', () => {
  let component: CartSvgComponent;
  let fixture: ComponentFixture<CartSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSvgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

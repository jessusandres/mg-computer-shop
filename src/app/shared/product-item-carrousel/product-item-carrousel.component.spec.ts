import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemCarrouselComponent } from './product-item-carrousel.component';

describe('ProductItemCarrouselComponent', () => {
  let component: ProductItemCarrouselComponent;
  let fixture: ComponentFixture<ProductItemCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemCarrouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

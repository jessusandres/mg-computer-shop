import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

/* Project */
import { TProduct } from '@app/types';
import { TooltipComponent } from '@app/shared/tooltip/tooltip.component';

@Component({
  selector: 'app-product-item-carrousel',
  standalone: true,
  imports: [TooltipComponent, NgForOf, RouterLink, NgIf],
  templateUrl: './product-item-carrousel.component.html',
  styleUrl: './product-item-carrousel.component.scss',
})
export class ProductItemCarrouselComponent {
  @Input({
    alias: 'product',
    required: true,
  })
  product!: TProduct;

  displayMenu: boolean = false;
  selectedWarehouse: number = 0;

  constructor() {}

  showMenu() {
    this.displayMenu = true;
  }

  hideMenu() {
    this.displayMenu = false;
  }

  addToCart() {
    console.log({
      id: this.product.id,
      quantity: 1,
      warehouse: this.selectedWarehouse,
    });

    this.displayMenu = false;
    this.selectedWarehouse = 0;
  }

  setWarehouse(id: number) {
    console.log({
      id,
    });
    this.selectedWarehouse = id;
  }
}

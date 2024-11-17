import { Component, Input, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

/* Project */
import { TProduct } from '@app/types';
import { TooltipComponent } from '@app/shared/tooltip/tooltip.component';
import { HomeStateProvider } from '@app/providers/home-state.provider';

@Component({
  selector: 'app-product-item-carrousel',
  standalone: true,
  imports: [TooltipComponent, NgForOf, RouterLink],
  templateUrl: './product-item-carrousel.component.html',
  styleUrl: './product-item-carrousel.component.scss',
})
export class ProductItemCarrouselComponent implements OnInit {
  @Input({
    alias: 'product',
    required: true,
  })
  product!: TProduct;

  @Input({
    alias: 'key',
    required: true,
  })
  key!: string;

  displayMenu: boolean = false;
  selectedWarehouse: number = 0;
  baseIdentifier: string = '';
  private selectedCurrency!: string;

  constructor(homeStateProvider: HomeStateProvider) {
    homeStateProvider.selectedCurrency$.subscribe((currency) => {
      this.selectedCurrency = currency;
    });
  }

  get trimmedName() {
    const currentLength = this.product.name.length;

    if (currentLength <= 50) {
      return this.product.name;
    }

    return this.product.name.trim().substring(0, 50) + '...';
  }

  ngOnInit() {
    this.baseIdentifier = `${this.key}-product-${this.product.id}`;
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
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
    this.selectedWarehouse = id;
  }

  get calculatedPrice() {
    switch (this.selectedCurrency) {
      case 'PEN':
        return `S./${this.product.pricePEN}`;
      case 'USD':
        return `$${this.product.priceUSD}`;
      case 'EUR':
        return `€${this.product.priceEUR}`;
      default:
        return `S./${this.product.pricePEN}`;
    }
  }
}

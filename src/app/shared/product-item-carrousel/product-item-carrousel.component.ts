import { Component, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

/* Project */
import { TProduct } from '@app/types';
import { TooltipComponent } from '@app/shared/tooltip/tooltip.component';
import { HomeStateProvider } from '@app/providers/home-state.provider';
import { productPrice, productSymbol } from '@app/helpers';

@Component({
  selector: 'app-product-item-carrousel',
  standalone: true,
  imports: [TooltipComponent, NgForOf, RouterLink, NgIf],
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

  currency!: string;
  displayMenu: boolean = false;
  selectedWarehouse: number = 0;
  baseIdentifier: string = '';
  priceText!: string;

  constructor(private readonly homeStateProvider: HomeStateProvider) {}

  get trimmedName() {
    const currentLength = this.product.name.length;

    if (currentLength <= 50) {
      return this.product.name;
    }

    return this.product.name.trim().substring(0, 50) + '...';
  }

  ngOnInit() {
    this.baseIdentifier = `${this.key}-product-${this.product.id}`;

    this.homeStateProvider.selectedCurrency$.subscribe((currency) => {
      this.currency = currency;
      this.priceText =
        productSymbol(currency) + productPrice(currency, this.product);
    });
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }

  hideMenu() {
    this.displayMenu = false;
  }

  addToCart(event: Event) {
    event.stopPropagation();
    console.log({
      id: this.product.id,
      quantity: 1,
      warehouse: this.selectedWarehouse,
    });

    this.homeStateProvider.addProductToCart(
      {
        id: this.product.id,
        quantity: 1,
        warehouse: this.selectedWarehouse,
        name: this.product.name,
        pricePEN: this.product.pricePEN,
        priceUSD: this.product.priceUSD,
        priceEUR: this.product.priceEUR,
        image: this.product.image,
      },
      true,
    );

    this.displayMenu = false;
    this.selectedWarehouse = 0;
  }

  setWarehouse(id: number) {
    this.selectedWarehouse = id;
  }

  setProductModal(event: Event) {
    event.stopPropagation();
    this.homeStateProvider.setProductModal(this.product);
  }

  protected readonly Number = Number;
}

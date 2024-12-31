import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

/* Project */
import { ProductItemCarrouselComponent } from '@app/shared/product-item-carrousel/product-item-carrousel.component';
import { TProduct } from '@app/types';
import { ActivatedRoute } from '@angular/router';
import { MenusStateProvider } from '@app/providers/menus-state.provider';

@Component({
  selector: 'app-shopfront',
  standalone: true,
  imports: [NgForOf, ProductItemCarrouselComponent, NgIf],
  templateUrl: './shopfront.component.html',
  styleUrl: './shopfront.component.scss',
})
export class ShopfrontComponent {
  pageName = '';

  loading = true;

  activeClass = 'text-white border border-primary-900 bg-primary-900';
  normalClass =
    'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700';

  grid = 4;
  currentRowsDisplayed = 9;
  currentPage = 1;

  totalPages = 4;
  totalRows = 100;

  availableSizes = [9, 12, 18, 24];

  stepper = 50;

  maxRange = 7900;
  minRange = 100;

  maxForMinAllowed = 7900;
  minForMaxAllowed = 100;

  currentMin = 100;
  currentMax = 7900;

  minThumb = 0;
  maxThumb = 0;

  mockProduct: TProduct = {
    id: 1,
    name: 'CASE HALION STUKA CR11 WHITE, PANEL MESH, X4 FAN RGB',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    discounts: [
      {
        method: 'EFFECTIVE',
        amount: 10,
      },
    ],
    sku: '910-005281',
    categories: [
      {
        id: 3,
        name: 'CASES',
      },
    ],
    tags: [
      {
        id: 1,
        name: 'GABINETE/CASE',
      },
      {
        id: 2,
        name: 'GABINETE S/FUENTE',
      },
    ],
    image:
      'https://gamerbit.pe/wp-content/uploads/2024/01/CASE-GAMER-SIN-FUENTE-STUKA-CR11-WHITE-860x860.jpg',
    pricePEN: 238.99,
    priceUSD: 61.92,
    priceEUR: 62.9,
    warehouses: [
      {
        id: 1,
        name: 'Chiclayo',
      },
      {
        id: 2,
        name: 'Trujillo',
      },
      {
        id: 3,
        name: 'Lima',
      },
    ],
    stock: 10,
  };

  protected readonly Array = Array;

  constructor(
    private readonly menusStateProvider: MenusStateProvider,
    private readonly route: ActivatedRoute,
  ) {
    // const dynamic = this.route.snapshot.data['dynamic'];
    // const tags = this.route.snapshot.data['tags'];

    const category = this.route.snapshot.paramMap.get('category') || '';
    const subCategory = this.route.snapshot.paramMap.get('sub-category') || '';

    this.pageName = route.snapshot.data['tags'];
    this.menusStateProvider.setCategoriesMenu(false);

    this.fetchProducts(category, subCategory);
  }

  fetchProducts(category: string, subCategory?: string) {
    console.log({
      category,
      subCategory,
    });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      console.log({ page });
      this.currentPage = page;
    }
  }

  handleMinPrice(event: any) {
    this.currentMin = +event.target['value'];

    this.maxForMinAllowed = Math.max(this.currentMin, this.currentMax - 500);

    this.minThumb =
      ((this.currentMin - this.minRange) / (this.maxRange - this.minRange)) *
      100;
  }

  handleMaxPrice(event: any) {
    this.currentMax = +event.target['value'];

    this.minForMaxAllowed = Math.min(this.currentMax, this.currentMin + 500);

    this.maxThumb =
      100 -
      ((this.currentMax - this.minRange) / (this.maxRange - this.minRange)) *
        100;
  }
}

import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

/* Project */
import { ProductItemCarrouselComponent } from '@app/shared/product-item-carrousel/product-item-carrousel.component';
import { TProduct } from '@app/types';
import { HomeStateProvider } from '@app/providers/home-state.provider';

declare let Swiper: any;

@Component({
  selector: 'app-product-carrousel',
  standalone: true,
  imports: [ProductItemCarrouselComponent, NgForOf],
  templateUrl: './product-carrousel.component.html',
  styleUrl: './product-carrousel.component.scss',
})
export class ProductCarrouselComponent implements OnInit {
  readonly products: TProduct[];

  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.products = this.homeStateProvider.products;
  }

  ngOnInit() {
    new Swiper('.latest-swiper', {
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: false,
      grabCursor: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.products .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.products .swiper-button-next',
        prevEl: '.products .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3.3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }
}

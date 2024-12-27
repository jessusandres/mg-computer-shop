import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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
  @Input({
    required: true,
    alias: 'key',
  })
  key!: string;

  @Input({
    alias: 'maxSlides',
  })
  maxSlides?: number = 5;

  readonly products: TProduct[];
  swiper: any;

  constructor(private readonly homeStateProvider: HomeStateProvider) {
    this.products = this.homeStateProvider.products;
  }

  ngOnInit() {
    setTimeout(() => {
      this.swiper = new Swiper(`.${this.key}-swiper`, {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: false,
        grabCursor: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        pagination: {
          el: `.${this.key} .swiper-pagination`,
          clickable: true,
        },
        navigation: {
          nextEl: `.${this.key} .swiper-button-next`,
          prevEl: `.${this.key} .swiper-button-prev`,
        },
        breakpoints: {
          768: {
            slidesPerView: 3.3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: this.maxSlides,
            spaceBetween: 20,
          },
        },
      });
    });
  }

  stopPlaying() {
    this.swiper?.autoplay.stop();
  }

  startPlaying() {
    this.swiper?.autoplay.start();
  }
}

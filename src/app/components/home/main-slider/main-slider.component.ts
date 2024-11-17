import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

/* Extra */
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
})
export class MainSliderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // setTimeout(() => {
    new Swiper('.main-slider', {
      modules: [Autoplay, Pagination, Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // });
  }
}

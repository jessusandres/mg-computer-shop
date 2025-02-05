import { useRef } from 'react';

/* Extra */
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

/* Project */
import Products from '~/data/products.json';
import { ProductItemCarrousel } from '../ProductItemCarrousel';

type ProductsCarrouselProps = {
  maxSlides?: number;
  elementKey: string;
};

export const ProductsCarrousel = (props: ProductsCarrouselProps) => {
  const { maxSlides = 5, elementKey } = props;

  const swiperRef = useRef(null);

  return (
    <div className="relative headSwiper h-full">
      <Swiper
        ref={swiperRef}
        loop
        modules={[Autoplay, Pagination, Navigation, Controller]}
        spaceBetween={20}
        slidesPerView={1.5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: 'bullets',
          el: `.swiper-pagination-${elementKey}`,
        }}
        navigation={{
          enabled: true,
          nextEl: `.swiper-button-next-${elementKey}`,
          prevEl: `.swiper-button-prev-${elementKey}`,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3.3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: maxSlides,
            spaceBetween: 20,
          },
        }}
      >
        {Products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItemCarrousel product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`swiper-pagination swiper-pagination-${elementKey} !-bottom-[35px]`}
      ></div>
      <div
        className={`swiper-button-next-${elementKey} swiper-button-next -right-[43px] text-[#333]`}
      ></div>
      <div
        className={`swiper-button-prev-${elementKey} swiper-button-prev -left-[43px] text-[#333]`}
      ></div>
    </div>
  );
};

/* Project */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const MainSlider = () => {
  return (
    <div className="flex gap-4 mb-[50px] lg:justify-end">
      <div className="w-full lg:w-4/5" id="banners">
        <Swiper
          loop
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'bullets',
          }}
          navigation={{
            enabled: true,
          }}
        >
          <SwiperSlide>
            <img
              src="https://gamerbit.pe/wp-content/uploads/2022/09/AMD-RYZEN-SERIE-7000-ZEN-4.jpg"
              alt=""
              className="object-fill size-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://gamerbit.pe/wp-content/uploads/2023/10/GAMERBIT-BANER.png"
              alt=""
              className="object-fill size-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://gamerbit.pe/wp-content/uploads/revslider/electronics-1/BANER-01.jpg"
              alt=""
              className="object-fill size-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://gamerbit.pe/wp-content/uploads/2022/06/gamerbit-banner.jpg"
              alt=""
              className="object-fill size-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

import { Link } from '@remix-run/react';

/* Project */
import { ProductsCarrousel } from '~/components/shared';

type SecondaryProductsCarrouselProps = {
  elementKey: string;
  title: string;
};

export const SecondaryProductsCarrousel = (
  props: SecondaryProductsCarrouselProps,
) => {
  const { elementKey, title } = props;

  return (
    <section className="pt-8 pb-16">
      <div className="px-4 mx-auto max-w-df">
        <div className="flex flex-wrap gap-4 lg:flex-nowrap">
          <div className="w-full lg:w-1/4">
            <Link to="/">
              <img
                src="https://gamerbit.pe/wp-content/uploads/2022/09/PC-GAMER_RYZEN-5-5500-RX-6600-700x1145.jpg"
                alt=""
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="w-full lg:w-3/4">
            <div className="{{key}} navSwiper">
              <h4 className="text-[22px] font-semibold font-poppins mb-5">
                {title.toUpperCase()}
              </h4>
              <div style={{ height: '30rem', display: 'block' }}>
                <ProductsCarrousel elementKey={elementKey} maxSlides={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

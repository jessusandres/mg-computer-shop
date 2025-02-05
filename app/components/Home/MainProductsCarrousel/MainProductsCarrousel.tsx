import { ProductsCarrousel } from '~/components/shared';

type ProductsCarrouselProps = {
  elementKey: string;
  title: string;
};

export const MainProductsCarrousel = (props: ProductsCarrouselProps) => {
  const { elementKey, title } = props;

  return (
    <div className="py-14 navSwiper">
      <h4 className="text-[22px] font-semibold font-poppins mb-5">
        {title.toUpperCase()}
      </h4>

      <ProductsCarrousel elementKey={elementKey} />
    </div>
  );
};

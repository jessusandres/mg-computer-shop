type FeaturedProductsProps = {
  title: string;
};

export const FeaturedProducts = (props: FeaturedProductsProps) => {
  const { title } = props;

  return (
    <div className="py-14 {{key}} navSwiper">
      <h4 className="text-[22px] font-semibold font-poppins mb-5">
        {title.toUpperCase()}
      </h4>

      {/*<app-product-carrousel />*/}
    </div>
  );
};

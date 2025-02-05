/* Project */
import {
  FeaturedCategories,
  HardwareGuide,
  MainProductsCarrousel,
  MainSlider,
  PrimaryBanner,
  SecondaryProductsCarrousel,
  SiteReference,
} from '~/components/Home';
import env from '~/config/env';

export const HomePage = () => {
  const { APP_NAME } = env;
  console.log(`Welcome to HomePage: ${APP_NAME}`);

  return (
    <section className="mt-0.5">
      <div className="home-container mx-auto max-w-df">
        <MainSlider />
        <FeaturedCategories />
        <MainProductsCarrousel
          elementKey="latest-products"
          title="últimos productos"
        />
        <MainProductsCarrousel
          elementKey="featured-products"
          title="destacados"
        />
        <PrimaryBanner />
        <SecondaryProductsCarrousel
          elementKey="secondary-one"
          title="Memorias RAM"
        />
        <SecondaryProductsCarrousel
          elementKey="secondary-two"
          title="Procesadores"
        />
        <SiteReference />
        <MainProductsCarrousel elementKey="season-products" title="Temporada" />
        <HardwareGuide />
      </div>
    </section>
  );
};

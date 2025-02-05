export const FeaturedCategories = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="p-5 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <h2 className="mb-4 text-xl font-semibold uppercase font-poppins whitespace-nowrap">
              Procesadores
            </h2>
            <p className="mb-4 text-sm text-pretty">
              Encuentra los mejores procesadores para el trabajo o gaming en AMD
              o INTEL
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase"
            >
              Comprar ahora
              <img src="/icons/cart.svg" alt="cart-black" className="w-5 h-5" />
            </a>
          </div>
          <img
            src="https://gamerbit.pe/wp-content/uploads/2022/06/PROCESADORES-AMD-E-INTEL.png"
            alt=""
            width="200"
          />
        </div>
      </div>
      <div className="p-5 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <h2 className="mb-4 text-xl font-semibold uppercase font-poppins whitespace-nowrap">
              TARJETA DE VIDEO
            </h2>
            <p className="mb-4 text-sm text-pretty">
              Juega y transmite con alta calidad de fotogramas a bajas latencias
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase"
            >
              Comprar ahora
              <img src="/icons/cart.svg" alt="cart-black" className="w-5 h-5" />
            </a>
          </div>
          <img
            src="https://gamerbit.pe/wp-content/uploads/2022/06/TARJETAS.png"
            alt=""
            width="200"
          />
        </div>
      </div>
      <div className="p-5 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <h2 className="mb-4 text-xl font-semibold uppercase font-poppins whitespace-nowrap">
              LAPTOPS
            </h2>
            <p className="mb-4 text-sm text-pretty">
              tu nueva portátil para el trabajo o estudio. Sobre todo, en tu
              marca favorita.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase"
            >
              Comprar ahora
              <img src="/icons/cart.svg" alt="cart-black" className="w-5 h-5" />
            </a>
          </div>
          <img
            src="https://gamerbit.pe/wp-content/uploads/2022/06/laptos.png"
            alt=""
            width="200"
          />
        </div>
      </div>
    </div>
  );
};

import { Link } from '@remix-run/react';

export const PrimaryBanner = () => {
  return (
    <section className="py-10">
      <div className="px-4 mx-auto max-w-df">
        <div className="flex flex-col items-center gap-12 p-8 text-white lg:flex-row bg-gradient-to-r from-primary-950 to-primary-900 font-poppins">
          <div>
            <h2 className="mb-5 text-2xl font-semibold uppercase">
              Mi pc gamer
            </h2>
            <p className="text-[19px] mb-6">
              Potencia gráfica para llevarla a cualquier lugar, cumpliendo las
              exigencias de todos los Gamers y profesionales, diseñadores o
              creadores de contenido.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase"
            >
              Comprar ahora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                ></path>
              </svg>
            </Link>
          </div>
          <img
            src="https://gamerbit.pe/wp-content/uploads/2022/06/msi-katana-gamerbit.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

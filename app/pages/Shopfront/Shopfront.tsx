import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

/* Project */
import { HomeActions } from '~/store/home.store';
import { ProductItemCarrousel } from '~/components/shared/ProductItemCarrousel';
import { delay } from '~/helpers/app.helpers';
import { CatalogPriceFilter } from '~/components/Shopfront';
import { Products } from '~/data';

export const Shopfront = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [gridSize, setGridSize] = useState(2);

  const [pageNumber, setPageNumber] = useState(1);
  const pageName = 'Shopfront';

  const currentRowsDisplayed = 10;
  const totalRows = 200;
  const totalPages = 5;

  const availableGridSizes = [2, 3, 4];

  const activeClass = 'text-white border border-primary-900 bg-primary-900';
  const normalClass =
    'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700';

  useEffect(() => {
    dispatch(HomeActions.hideCategoriesMenu());

    delay(0).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <section className="bg-[#0A0A0A] text-white py-4 md:py-10 lg:py-14">
        <div className="px-4 mx-auto max-w-df">
          <h1 className="text-5xl md:text-[68px] font-semibold font-poppins text-center">
            {pageName}
          </h1>
        </div>
      </section>

      {loading && <div>Loading...</div>}

      {!loading && (
        <section className="pt-10 pb-20">
          <div className="px-4 mx-auto max-w-df">
            <div className="flex gap-6">
              <div className="fixed inset-y-0 left-0 z-[60] w-64 px-5 pt-6 pb-4 overflow-y-scroll bg-white lg:w-1/4 lg:!block lg:relative lg:overflow-y-hidden lg:z-10">
                <CatalogPriceFilter />
                <h5 className="font-poppins font-semibold text-[#333] uppercase mb-8">
                  FILTRAR POR ALMACÉN
                </h5>
                <div className="pb-8 mb-6 border-b">
                  <ul className="space-y-3.5 overflow-y-auto max-h-56 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Arequipa
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Cusco
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Huancayo
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          3
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Juliaca
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Lima
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Loreto
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Piura
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Tacna
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Tumbes
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Ayacucho
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Cajamarca
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex items-center justify-between text-sm text-[#777777] hover:text-[#333] transition-all duration-300"
                      >
                        Callao
                        <span className="px-2 py-1 border border-gray-300 rounded-full text-xs text-[#777777] group-hover:bg-primary-700 group-hover:text-white transition-all duration-200">
                          12
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h5 className="font-poppins font-semibold text-[#333] uppercase mb-8">
                  PRODUCTOS TOP
                </h5>
                <div className="space-y-4 divide-y *:pt-4">
                  {Array.from(Array(4).keys()).map((_, ind) => (
                    <div
                      key={`top-product-${ind}`}
                      className="flex items-start gap-4"
                    >
                      <a href="" className="flex-shrink-0">
                        <img
                          src="https://gamerbit.pe/wp-content/uploads/2021/06/CPILI710700F-430x430.jpg"
                          alt=""
                          className="object-contain w-16 h-16"
                        />
                      </a>
                      <div className="space-y-3">
                        <a href="#" className="text-sm font-medium">
                          PROC. INTEL CORE I7-10700F 2.90 GHz, 16MB CACHE, TDP
                          65W
                        </a>
                        <span className="block text-lg font-semibold text-green-500">
                          S/. 834.60 - $216.78
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-3/4">
                <div className="flex flex-col justify-between pb-6 mb-6 border-b md:items-center md:flex-row md:border-none md:pb-0">
                  <nav className="flex items-center space-x-2 text-sm">
                    <a
                      href="#"
                      className="text-gray-400 after:content-['/'] after:!text-[#333] after:ml-2"
                    >
                      Inicio
                    </a>
                    <span className="text-[#333] font-semibold">Tienda</span>
                  </nav>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-400">
                      Mostrando 1-{currentRowsDisplayed} de {totalRows}{' '}
                      resultados
                    </span>
                    <div className="items-center hidden gap-2 text-sm md:flex">
                      <span className="font-semibold">Mostrar:</span>
                      {availableGridSizes.map((aGridSize) => (
                        <p key={`grid-size-${aGridSize}`}>
                          <a
                            onClick={() => setGridSize(aGridSize)}
                            className={`cursor-pointer ${gridSize === aGridSize ? 'font-bold' : 'text-gray-500'}`}
                          >
                            {aGridSize}
                          </a>
                          <span className="text-gray-400">/</span>
                        </p>
                      ))}
                    </div>
                    <div className="items-center hidden gap-2 md:flex">
                      <button
                        type="button"
                        className={`text-gray-400 ${gridSize === 2 && '!text-[#333]'}`}
                        onClick={() => setGridSize(2)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 56 56"
                        >
                          <path
                            fill="currentColor"
                            d="M34.434 26.066h10.664c3 0 4.476-1.5 4.476-4.593V10.996c0-3.094-1.476-4.57-4.476-4.57H34.434c-2.977 0-4.477 1.476-4.477 4.57v10.477c0 3.093 1.5 4.593 4.477 4.593m-23.532 0H21.59c2.976 0 4.476-1.5 4.476-4.593V10.996c0-3.094-1.5-4.57-4.476-4.57H10.902c-2.976 0-4.476 1.476-4.476 4.57v10.477c0 3.093 1.5 4.593 4.476 4.593m0 23.508H21.59c2.976 0 4.476-1.476 4.476-4.57v-10.5c0-3.07-1.5-4.57-4.476-4.57H10.902c-2.976 0-4.476 1.5-4.476 4.57v10.5c0 3.094 1.5 4.57 4.476 4.57m23.532 0h10.664c3 0 4.476-1.476 4.476-4.57v-10.5c0-3.07-1.476-4.57-4.476-4.57H34.434c-2.977 0-4.477 1.5-4.477 4.57v10.5c0 3.094 1.5 4.57 4.477 4.57"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className={`text-gray-400 ${gridSize === 3 && '!text-[#333]'}`}
                        onClick={() => setGridSize(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 56 56"
                        >
                          <path
                            fill="currentColor"
                            d="M3.76 27.696h8.975c2.5 0 3.76-1.26 3.76-3.859V15.04c0-2.598-1.26-3.838-3.76-3.838H3.76C1.26 11.2 0 12.44 0 15.039v8.798c0 2.599 1.26 3.858 3.76 3.858m19.762 0h8.956c2.52 0 3.76-1.26 3.76-3.859V15.04c0-2.598-1.24-3.838-3.76-3.838h-8.956c-2.5 0-3.76 1.24-3.76 3.838v8.798c0 2.599 1.26 3.858 3.76 3.858m19.743 0h8.975c2.5 0 3.76-1.26 3.76-3.859V15.04c0-2.598-1.26-3.838-3.76-3.838h-8.975c-2.5 0-3.76 1.24-3.76 3.838v8.798c0 2.599 1.26 3.858 3.76 3.858M3.76 47.438h8.975c2.5 0 3.76-1.24 3.76-3.838v-8.818c0-2.579-1.26-3.839-3.76-3.839H3.76c-2.5 0-3.76 1.26-3.76 3.839V43.6c0 2.598 1.26 3.838 3.76 3.838m19.762 0h8.956c2.52 0 3.76-1.24 3.76-3.838v-8.818c0-2.579-1.24-3.839-3.76-3.839h-8.956c-2.5 0-3.76 1.26-3.76 3.839V43.6c0 2.598 1.26 3.838 3.76 3.838m19.743 0h8.975c2.5 0 3.76-1.24 3.76-3.838v-8.818c0-2.579-1.26-3.839-3.76-3.839h-8.975c-2.5 0-3.76 1.26-3.76 3.839V43.6c0 2.598 1.26 3.838 3.76 3.838"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className={`text-gray-400 ${gridSize === 4 && '!text-[#333]'}`}
                        onClick={() => setGridSize(4)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 56 56"
                        >
                          <path
                            fill="currentColor"
                            d="M5.008 17.957h3.89c1.477 0 2.016-.539 2.016-2.016v-3.89c0-1.477-.539-2.016-2.016-2.016h-3.89c-1.5 0-2.04.54-2.04 2.016v3.89c0 1.477.54 2.016 2.04 2.016m13.992 0h3.89c1.477 0 2.016-.539 2.016-2.016v-3.89c0-1.477-.539-2.016-2.015-2.016H19c-1.477 0-2.016.54-2.016 2.016v3.89c0 1.477.54 2.016 2.016 2.016m13.992 0h3.89c1.5 0 2.04-.539 2.04-2.016v-3.89c0-1.477-.54-2.016-2.04-2.016h-3.89c-1.476 0-2.015.54-2.015 2.016v3.89c0 1.477.539 2.016 2.015 2.016m14.016 0h3.89c1.477 0 2.016-.539 2.016-2.016v-3.89c0-1.477-.539-2.016-2.015-2.016h-3.891c-1.5 0-2.04.54-2.04 2.016v3.89c0 1.477.54 2.016 2.04 2.016M5.125 31.973h3.89c1.477 0 2.016-.54 2.016-2.04v-3.89c0-1.477-.539-2.016-2.015-2.016H5.125c-1.5 0-2.04.54-2.04 2.016v3.89c0 1.5.54 2.04 2.04 2.04m13.992 0h3.89c1.477 0 2.016-.54 2.016-2.04v-3.89c0-1.477-.539-2.016-2.015-2.016h-3.89c-1.477 0-2.016.54-2.016 2.016v3.89c0 1.5.539 2.04 2.015 2.04m13.992 0H37c1.5 0 2.04-.54 2.04-2.04v-3.89c0-1.477-.54-2.016-2.04-2.016h-3.89c-1.477 0-2.016.54-2.016 2.016v3.89c0 1.5.539 2.04 2.015 2.04m14.016 0h3.89c1.477 0 2.016-.54 2.016-2.04v-3.89c0-1.477-.539-2.016-2.015-2.016h-3.891c-1.5 0-2.04.54-2.04 2.016v3.89c0 1.5.54 2.04 2.04 2.04m-42 13.992h3.89c1.477 0 2.016-.54 2.016-2.016v-3.89c0-1.5-.539-2.04-2.015-2.04H5.125c-1.5 0-2.04.54-2.04 2.04v3.89c0 1.477.54 2.016 2.04 2.016m13.992 0h3.89c1.477 0 2.016-.54 2.016-2.016v-3.89c0-1.5-.539-2.04-2.015-2.04h-3.89c-1.477 0-2.016.54-2.016 2.04v3.89c0 1.477.539 2.016 2.015 2.016m13.992 0H37c1.5 0 2.04-.54 2.04-2.016v-3.89c0-1.5-.54-2.04-2.04-2.04h-3.89c-1.477 0-2.016.54-2.016 2.04v3.89c0 1.477.539 2.016 2.015 2.016m14.016 0h3.89c1.477 0 2.016-.54 2.016-2.016v-3.89c0-1.5-.539-2.04-2.015-2.04h-3.891c-1.5 0-2.04.54-2.04 2.04v3.89c0 1.477.54 2.016 2.04 2.016"
                          />
                        </svg>
                      </button>
                    </div>
                    <select
                      name=""
                      className="hidden text-sm border-gray-200 rounded-md md:block"
                    >
                      <option value="">Ordenar por popularidad</option>
                      <option value="">Ordenar por precio</option>
                      <option value="">Ordenar por nombre</option>
                      <option value="">Ordenar por fecha</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-5 lg:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-black text-tinny"
                  >
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
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    Filtros
                  </button>
                  <select
                    name=""
                    id=""
                    className="text-sm border-gray-200 rounded-md"
                  >
                    <option value="">Ordenar por popularidad</option>
                    <option value="">Ordenar por precio</option>
                    <option value="">Ordenar por nombre</option>
                    <option value="">Ordenar por fecha</option>
                  </select>
                </div>
                <div
                  className={`grid ${gridSize !== 2 && `grid-cols-${gridSize}`} gap-6 transition-all origin-top gap-y-20 md:gap-y-6 animate-fade ${`md:grid-cols-${gridSize}`}`}
                >
                  {[...Products, ...Products, ...Products].map(
                    (product, index) => (
                      <ProductItemCarrousel
                        key={`shopfront-${product.id}-${index}`}
                        product={product}
                      />
                    ),
                  )}
                </div>

                <div className="flex justify-center mt-28 md:mt-12">
                  <nav>
                    <ul className="flex items-center h-8 -space-x-px text-sm">
                      <li>
                        <a
                          onClick={() => setPageNumber((p) => p - 1)}
                          className="cursor-pointer flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                          <span className="sr-only">Anterior</span>
                          <svg
                            className="w-2.5 h-2.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 1 1 5l4 4"
                            />
                          </svg>
                        </a>
                      </li>
                      {Array.from(Array(totalPages).keys()).map((_, ind) => (
                        <li
                          key={`pagination-item-${ind}`}
                          onClick={() => setPageNumber(() => ind + 1)}
                        >
                          <a
                            aria-current="page"
                            className={`cursor-pointer z-10 flex items-center justify-center h-8 px-3 leading-tight ${pageNumber === ind + 1 ? activeClass : normalClass}`}
                          >
                            {ind + 1}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          onClick={() => setPageNumber((p) => p + 1)}
                          className="cursor-pointer flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                          <span className="sr-only">Siguiente</span>
                          <svg
                            className="w-2.5 h-2.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

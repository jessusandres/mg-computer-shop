import { useEffect, useRef, useState } from 'react';

/* Project */
import { delay } from '~/helpers/app.helpers';
import './ProductDetail.css';

export const ProductDetail = () => {
  const productDetailRef = useRef<HTMLElement>(null);

  const [cartAmount, setCartAmount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [scrollPanel, setScrollPanel] = useState(false);

  console.log({ activeTab });

  const scrollToUp = () => {
    console.log('scrollToUp');

    if (productDetailRef.current) {
      productDetailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.onscroll = () => {
      setScrollPanel(window.scrollY > 500);
    };

    delay(1.5).then(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="pb-16" id="principal" ref={productDetailRef}>
        <div className="px-4 mx-auto max-w-df">
          <div className="flex gap-4 mb-[50px]">
            {loading && (
              <div className="w-full pt-5 ml-auto lg:w-4/5">
                <h2 className="text-center">Products is loading...</h2>
                <div style={{ height: '20rem' }} />
              </div>
            )}
            {!loading && (
              <div className="w-full pt-5 ml-auto border-l lg:w-4/5">
                <div className="flex flex-wrap gap-6 px-4 lg:px-0 lg:flex-nowrap">
                  <div className="w-full lg:w-1/2">
                    <img
                      src="https://gamerbit.pe/wp-content/uploads/2024/01/CASE-GAMER-SIN-FUENTE-STUKA-CR11-WHITE-860x860.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h1 className="text-[34px] font-medium text-[#333333] mb-4">
                      CASE HALION STUKA CR11 WHITE, PANEL MESH, X4 FAN RGB
                    </h1>
                    <p className="text-sm text-[#777777] mb-5">
                      Case Gamer S/Fuente Mid-Tower Halion STUKA CR11 White, x4
                      Fan 12cm RGB, Panel Mesh, Lat. Vidrio Templado
                    </p>
                    <div className="w-full mb-5 border-2 px-4 py-1.5 border-green-500 rounded-lg">
                      <span className="block mb-1 text-[35px] font-semibold text-green-500">
                        S/. 708.21 - $70.95
                      </span>
                      <p className="text-tinny text-[#6a6a6a] font-semibold">
                        *5% Adicional para pago con tarjeta de crédito/debito.
                      </p>
                    </div>
                    <div className="">
                      <span className="block mb-2.5 text-sm font-semibold text-black">
                        Almacén:
                      </span>
                      <div>
                        <ul className="flex items-center gap-2 [&amp;>*>span]:border [&amp;>*>span]:border-gray-300 [&amp;>*>span]:bg-white [&amp;>*>span]:px-3 [&amp;>*>span]:py-1 [&amp;>*>span]:rounded-md [&amp;>*>span]:cursor-pointer [&amp;>*>span:hover]:border-gray-300 [&amp;>*>span:hover]:border-2 transition-all mb-5">
                          <li>
                            <span>Chiclayo</span>
                          </li>
                        </ul>
                        <div className="flex flex-col items-start gap-5">
                          <div className="inline-flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-5 h-5 text-green-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              ></path>
                            </svg>
                            <p className="text-sm font-semibold">
                              <span>9999999</span> Disponibles
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex gap-4 mb-6 mt-7">
                      <div className="relative">
                        <input
                          id="ivalor"
                          type="number"
                          name="cantidad"
                          className="w-24 h-full px-4 py-2 text-sm leading-normal text-center text-gray-500 bg-white border border-gray-200 rounded-full outline-none appearance-none text-bread"
                          value={cartAmount}
                          onChange={(e) => {
                            setCartAmount(parseInt(e.target.value));
                          }}
                          min={1}
                          max={100}
                        />
                        <div className="absolute inset-y-0 py-3 pl-2 border-r border-gray-200">
                          <button
                            onClick={() => setCartAmount((prev) => prev - 1)}
                            className="flex items-center justify-center w-5 h-5 text-lg text-gray-600 transition-all duration-300 ease-in-out bg-white rounded-full"
                            style={{ outline: 'none' }}
                          >
                            -
                          </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 py-3 pr-2 border-l border-gray-200">
                          <button
                            onClick={() => setCartAmount((prev) => prev + 1)}
                            className="flex items-center justify-center w-5 h-5 text-lg text-gray-600 transition-all duration-300 ease-in-out bg-white rounded-full outline-none"
                            style={{ outline: 'none' }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="px-4 py-2 font-bold leading-normal text-white transition-all duration-300 ease-in-out border rounded-full appearance-none bg-primary-950 hover:bg-primary-900 border-primary-950 hover:border-primary-900 text-[13px] max-w-fit"
                      >
                        AÑADIR AL CARRITO
                      </button>
                    </div>
                    <ul className="text-sm text-[#777777] pt-6 border-t">
                      <li>
                        <strong className="!text-black">SKU:</strong> 910-005281
                      </li>
                      <li>
                        <strong className="!text-black">Categorías:</strong>
                        <a href="#" className="hover:text-primary-950">
                          MOUSE GAMER
                        </a>
                        ,
                        <a href="#" className="hover:text-primary-950">
                          PERIFERICOS
                        </a>
                      </li>
                      <li>
                        <strong className="!text-black">Tags:</strong>
                        <a href="#" className="hover:text-primary-950">
                          G305
                        </a>
                        ,
                        <a href="#" className="hover:text-primary-950">
                          LOGITECH
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-4 pt-5 border-t mt-9">
                  <ul className="[&>*>a]:font-semibold [&>*>a]:uppercase flex items-center lg:justify-center gap-4 [&>*>a:hover]:text-primary-700 mb-14 overflow-x-auto text-nowrap">
                    <li>
                      <a
                        onClick={() => setActiveTab('description')}
                        className={`cursor-pointer ${activeTab === 'reviews' ? '!text-primary-700' : ''}`}
                      >
                        Descripción
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveTab('extra_info')}
                        className={`cursor-pointer ${activeTab === 'reviews' ? '!text-primary-700' : ''}`}
                      >
                        Información adicional
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveTab('reviews')}
                        className={`cursor-pointer ${activeTab === 'reviews' ? '!text-primary-700' : ''}`}
                      >
                        Valoraciones
                      </a>
                    </li>
                  </ul>
                  <div>
                    <div
                      className={`item-tab ${activeTab === 'description' && 'show'}`}
                    >
                      <h2 className="text-[24px] font-semibold mb-12 font-poppins">
                        CASE HALION STUKA CR11 WHITE, PANEL MESH, X4 FAN RGB
                      </h2>
                      <table className="max-w-[650px] mx-auto w-full">
                        <tbody className="divide-y *:pt-5 *:mb-[30px] *:pb-[30px] *:flex *:items-center *:justify-between [&>*>td]:text-end *:gap-6 text-sm [&>*>th]:font-semibold [&>*>td]:text-[#777777]">
                          <tr className="">
                            <th className="">MARCA</th>
                            <td className="">HALION</td>
                          </tr>
                          <tr className="">
                            <th className="">MODELO</th>
                            <td className="">STUKA CR11 WHITE</td>
                          </tr>
                          <tr className="">
                            <th className="">FACTOR DE FORMA</th>
                            <td className="">
                              MID TOWER ATX
                              <br />
                              ORIENTACION VERTICAL
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">DIMENSIONES</th>
                            <td className="">
                              CON FRONTIS:
                              <br />
                              LARGO: 365mm
                              <br />
                              ANCHO: 200mm
                              <br />
                              ALTO: 455mm
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">SOPORTA PLACAS</th>
                            <td className="">
                              PLACAS ATX (305mm x 244mm)
                              <br />
                              MICRO ATX (244mm x 244mm)
                              <br />
                              ITX (170mm x 170mm)
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">FUENTE DE PODER</th>
                            <td className="">NO</td>
                          </tr>
                          <tr className="">
                            <th className="">CONECTORES DE FUENTE</th>
                            <td className="">
                              CONECTOR P(20 + 4) Pines x 1<br />
                              CONECTOR P8 (4 + 4) Pines x 1<br />
                              CONECTOR PCIE-E(6 + 2) x 1<br />
                              CONECTOR 4P MOLEX x 2<br />
                              CONECTOR SATA x 2
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">BAHIAS</th>
                            <td className="">
                              INTERNAS:
                              <br />
                              (HDD)3.5 x 2<br />
                              (SDD)2.5 x 2
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">SLOT DE EXPANSION</th>
                            <td className="">7</td>
                          </tr>
                          <tr className="">
                            <th className="">BOTONES</th>
                            <td className="">
                              POWER
                              <br />
                              RESET
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">PUERTOS</th>
                            <td className="">
                              FRONTIS
                              <br />
                              USB 2.0 x 2<br />
                              USB 3.0 x 1<br />
                              AUDIO HD x 1<br />
                              MICROFONO HD x 1
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">CHASIS</th>
                            <td className="">
                              COLOR BLANCO
                              <br />
                              MATERIAL PANEL LATERAL DE VIDRIO TEMPLADO
                              <br />
                              ESPESOR DE 0.4mm
                              <br />
                              SOPORTA TARJETA GRAFICA HASTA 31cm
                              <br />
                              SISTEMA DE ENFRIAMIENTO LIQUIDO:
                              <br />
                              SUPERIOR 120/240mm
                              <br />
                              DELANTERO 120/240/360mm
                              <br />
                              POSTERIOR 120mm
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">VENTILADORES</th>
                            <td className="">
                              INCLUYE:
                              <br />
                              DELANTERO 3x120mm LED
                              <br />
                              POSTERIOR 1x120mm LED
                              <p></p>
                              <p>
                                ESPACIO ADICIONAL:
                                <br />
                                SUPERIOR 2x120mm
                              </p>
                            </td>
                          </tr>
                          <tr className="">
                            <th className="">CONTENIDO ADICIONAL</th>
                            <td className="">
                              TORNILLOS
                              <br />
                              CABLE DE PODER
                              <br />2 FILTRO DE POLVO (SUPERIOR E INFERIOR)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className={`item-tab ${activeTab === 'extra_info' && 'show'}`}
                    >
                      <table className="max-w-[650px] mx-auto w-full">
                        <tbody className="*:border-b *:mb-[30px] *:pb-[30px] *:flex *:items-center *:justify-between [&>*>td]:text-end *:gap-6 text-sm [&>*>th]:font-semibold [&>*>td]:text-[#777777]">
                          <tr className="">
                            <th className="">Almacén</th>
                            <td className="">Chiclayo, Trujillo, Lima</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className={`item-tab ${activeTab === 'reviews' && 'show'} mb-5`}
                    >
                      <div
                        className="flex flex-wrap gap-4"
                        style={{ placeContent: 'center' }}
                      >
                        <div className="w-full lg:w-1/2">
                          <h2 className="mb-4 text-sm font-semibold">
                            Valoraciones
                          </h2>
                          <p className="text-sm">No hay valoraciones aún</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                          <span className="text-sm text-[#242424] font-poppins mb-3 font-semibold block">
                            Sé el primero en valorar “CASE HALION STUKA CR11
                            WHITE, PANEL MESH, X4 FAN RGB”
                          </span>
                          <p className="mb-4 text-sm">
                            Tu dirección de correo electrónico no será
                            publicada. Los campos obligatorios están marcados
                            con *
                          </p>
                          <form action="">
                            <div className="flex flex-col mb-4">
                              <label
                                htmlFor="valoration"
                                className="text-sm text-[#242424] mb-1.5"
                              >
                                Tu valoración:
                              </label>
                              <textarea
                                name="valoration"
                                cols={30}
                                rows={10}
                                className="border-gray-200 rounded-lg"
                              ></textarea>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="text-sm text-[#242424]"
                                >
                                  Nombre*
                                </label>
                                <input
                                  name="name"
                                  type="text"
                                  className="border-gray-200 rounded-lg"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="email"
                                  className="text-sm text-[#242424]"
                                >
                                  Correo electrónico *
                                </label>
                                <input
                                  name="email"
                                  type="email"
                                  className="border-gray-200 rounded-lg"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                              <label
                                htmlFor="save-contact"
                                className="text-sm text-[#242424]"
                              >
                                <input type="checkbox" name="save-contact" />
                                Guarda mi nombre, correo electrónico y web en
                                este navegador para la próxima vez que comente.
                              </label>
                            </div>
                            <button
                              type="button"
                              className="flex justify-center px-4 py-2 text-white rounded-full max-w-fit bg-primary-950 text-[13px]"
                            >
                              ENVIAR
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="px-4 pt-4 border-t products2 {{key}} navSwiper"
                  id="destacados"
                >
                  <h3 className="uppercase text-[22px] font-semibold font-poppins mb-4">
                    Productos relacionados
                  </h3>
                  CARROUSEL FOR 4 SLIDES
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div
        className={`${scrollPanel ? 'translate-y-0' : 'translate-y-full'} fixed inset-x-0 bottom-0 z-50 w-full py-4 transition-all duration-300 bg-white border-t border-gray-100 shadow-2xl`}
      >
        <div className="px-4 mx-auto max-w-df">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex items-center gap-4">
              <img
                src="https://gamerbit.pe/wp-content/uploads/2024/01/CASE-GAMER-SIN-FUENTE-STUKA-CR11-WHITE-860x860.jpg"
                alt=""
                className="object-contain w-20 h-20"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  CASE HALION STUKA CR11 WHITE, PANEL MESH, X4 FAN RGB
                </h4>
                <span className="text-lg font-semibold text-green-500">
                  S/. 221.34 - $57.49
                </span>
              </div>
            </div>
            <a
              onClick={scrollToUp}
              className="cursor-pointer px-4 py-2 text-white uppercase rounded-full bg-primary-950 text-[13px]"
            >
              Seleccionar opciones
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

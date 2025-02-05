import { MouseEvent, useMemo, useState } from 'react';

/* Extra */
import { useDispatch } from 'react-redux';
import { Tooltip } from 'flowbite-react';

/* Project */
import { TProduct } from '~/types';
import './ProductItemCarrousel.css';
import { HomeActions } from '~/store/home.store';
import { CartActions } from '~/store/cart.store';

type ProductItemCarrouselProps = {
  product: TProduct;
};

export const ProductItemCarrousel = (props: ProductItemCarrouselProps) => {
  const { product } = props;

  const [selectedWarehouse, setSelectedWarehouse] = useState(0);
  const [displayMenu, setDisplayMenu] = useState(false);
  const dispatch = useDispatch();

  const trimmedName = useMemo(() => {
    const currentLength = product.name.length;

    if (currentLength <= 50) return product.name;

    return product.name.trim().substring(0, 50) + '...';
  }, [product]);
  const priceText = '';

  const redirectToDetail = () => {
    console.log('redirectToDetail');
  };

  const setProductModal = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(HomeActions.setProductModal({ productModal: product }));
  };

  const stopPropagationOnEvent = () => {
    console.log('stopPropationOnEvent');
  };

  const hideMenu = (event: MouseEvent) => {
    event.stopPropagation();
    setDisplayMenu(false);
  };

  const setWarehouse = (event: MouseEvent, warehouseId: number) => {
    event.stopPropagation();
    setSelectedWarehouse(warehouseId);
  };

  const filterTags = (event: MouseEvent, id: number) => {
    event.stopPropagation();

    console.log('filterTags', id);
  };

  const toggleMenu = (event: MouseEvent) => {
    event.stopPropagation();
    setDisplayMenu((prev) => !prev);
  };

  const addToCart = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(
      CartActions.addProductToCart({
        cartProduct: {
          ...product,
          quantity: 1,
          warehouse: selectedWarehouse,
        },
        openCartMenu: true,
      }),
    );
  };

  return (
    <div className="group" onClick={redirectToDetail}>
      <div className="relative overflow-hidden">
        <div className="absolute right-0 hidden transition-all duration-200 translate-x-12 opacity-0 lg:block group-hover:opacity-100 group-hover:translate-x-0">
          <div className="flex flex-col">
            <Tooltip content="Vista previa" placement="left">
              <a
                onClick={setProductModal}
                className="cursor-pointer size-[50px] bg-white flex justify-center items-center shadow-sm border-r"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </a>
            </Tooltip>
          </div>
        </div>
        <div
          onClick={stopPropagationOnEvent}
          className={`prd-item-menu absolute inset-0 flex flex-col items-center justify-end gap-4 origin-bottom bg-white/90 ${displayMenu ? 'show' : 'hide'}`}
        >
          <button
            type="button"
            className="absolute top-0 right-0 flex items-center gap-1 text-xs font-semibold uppercase"
            onClick={hideMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            Cerrar
          </button>
          <div className="text-center">
            <span className="block mb-2.5 text-sm font-semibold">Almacén:</span>
            <div>
              <ul className="flex items-center gap-2 [&>*>span]:border [&>*>span]:border-gray-300 [&>*>span]:bg-white [&>*>span]:px-3 [&>*>span]:py-1 [&>*>span]:rounded-md mb-5 [&>*>span]:cursor-pointer [&>*>span:hover]:border-gray-300 [&>*>span:hover]:border-2 transition-all">
                {product?.warehouses.map((warehouse) => (
                  <li
                    key={warehouse.id}
                    onClick={(evt) => setWarehouse(evt, warehouse.id)}
                  >
                    <span
                      className={`${selectedWarehouse === warehouse.id ? '!border-2 !border-black' : ''}`}
                    >
                      {warehouse.name}
                    </span>
                  </li>
                ))}
              </ul>
              {selectedWarehouse === 0 && (
                <span className="block mb-2.5 text-sm font-semibold text-black">
                  Seleccione un almacén
                </span>
              )}
              <div className="flex flex-col items-center gap-5">
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
                    />
                  </svg>
                  <p className="text-sm font-semibold">
                    <span>{product.stock}</span> Disponibles
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={addToCart}
            disabled={selectedWarehouse === 0}
            type="button"
            className={`w-full py-2.5 text-white uppercase ${selectedWarehouse === 0 ? 'bg-gray-400' : 'bg-primary-900 text-[13px] hover:bg-primary-950 transition'}`}
          >
            Añadir al carrito
          </button>
        </div>
        <img src={product.image} alt="" />
      </div>
      <div className="flex flex-col items-center px-3 pt-4 pb-5 text-center transition-all duration-200 rounded h-[230px] justify-between">
        <div>
          <h3 className="mb-3 text-sm font-medium text-black font-poppins">
            {trimmedName}
          </h3>
          <ul className="flex flex-wrap gap-1 text-xs text-gray-400 uppercase mb-2 [&>*>a:hover]:text-primary-900 justify-center">
            {product?.tags.map((tag) => (
              <li key={tag.id} onClick={(evt) => filterTags(evt, tag.id)}>
                <a className="cursor-pointer">{tag.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <span className="block mb-6 text-lg font-semibold text-primary-900">
            {priceText}
          </span>
          <a
            onClick={(evt) => toggleMenu(evt)}
            className="cursor-pointer relative flex items-center justify-center gap-2 overflow-hidden text-[13px] font-semibold text-white uppercase transition rounded-full max-w-fit hover:bg-primary-950 bg-primary-900 group/cart before:content-cart before:absolute before:size-5 before:translate-y-full before:opacity-0 hover:before:translate-y-0 hover:before:opacity-100 before:transition-all before:duration-200 before:ease-in-out before:flex before:items-center before:justify-center flex-shrink-0"
          >
            <span className="block px-4 py-3 leading-4 transition-transform group-hover/cart:-translate-y-full">
              Comprar
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

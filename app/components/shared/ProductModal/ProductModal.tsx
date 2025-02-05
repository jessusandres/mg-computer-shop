import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from '@remix-run/react';

/* Extra */
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

/* Project */
import { AppState } from '~/store/config';
import { Payments } from '~/types';
import { sleep } from '~/helpers';
import { ICartForm } from '~/interfaces';
import { HomeActions } from '~/store/home.store';
import { CartActions } from '~/store/cart.store';
import { useOutside } from '~/hooks';
import './ProductModal.css';

export const ProductModal = () => {
  const productModalRef = useRef(null);

  const dispatch = useDispatch();
  const product = useSelector((state: AppState) => state.home.productModal);
  const [cartFormLoading, setCartFormLoading] = useState(false);

  const cartSchema = useMemo(() => {
    return yup
      .object({
        cartWarehouse: yup.number().positive().integer().required(),
        cartAmount: yup
          .number()
          .positive()
          .integer()
          .max(product?.stock || 0)
          .required(),
      })
      .required();
  }, [product]);

  const {
    reset,
    control,
    handleSubmit,
    watch,
    formState: { isValid: formValid },
    setValue,
  } = useForm<ICartForm>({
    defaultValues: {
      cartWarehouse: 1,
      cartAmount: 0,
    },
    resolver: yupResolver(cartSchema),
  });

  const cartAmount = watch('cartAmount');
  const cartWarehouse = watch('cartWarehouse');

  const priceText = `S/. ${product?.pricePEN}`;

  const closeModal = () => {
    dispatch(HomeActions.removeProductModal());
  };

  useOutside(productModalRef, closeModal, !!product);

  useEffect(() => {
    if (!product) {
      reset();
    }
  }, [product, reset]);

  if (!product) return null;

  const sentToCart = async (data: ICartForm) => {
    setCartFormLoading(true);
    console.log('===> to add with api', data);
    const { cartWarehouse, cartAmount } = data;
    await sleep(1);

    dispatch(
      CartActions.addProductToCart({
        cartProduct: {
          id: product.id,
          quantity: cartAmount,
          warehouse: cartWarehouse,
          name: product.name,
          pricePEN: product.pricePEN,
          priceUSD: product.priceUSD,
          priceEUR: product.priceEUR,
          image: product.image,
        },
        openCartMenu: true,
      }),
    );

    closeModal();
    setCartFormLoading(false);
  };

  const addToCart = () => {
    if (!formValid) {
      return alert('Please enter a valid cart.');
    }

    handleSubmit(sentToCart)();
  };

  const setWarehouse = (warehouseId: number) => {
    setValue('cartWarehouse', warehouseId, { shouldValidate: true });
  };

  const subtractOne = () => {
    setValue('cartAmount', cartAmount - 1, { shouldValidate: true });
  };

  const addOne = () => {
    setValue('cartAmount', cartAmount + 1, { shouldValidate: true });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto product-modal">
      <div className="flex items-center justify-center min-h-screen py-5 mx-4 md:mx-0 lg:py-0">
        <div
          className="w-full overflow-hidden bg-white shadow-md rounded-xl md:max-w-[950px] md:w-auto relative"
          ref={productModalRef}
        >
          <button
            className="absolute inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 transition-colors duration-150 bg-gray-100 rounded-full right-3 top-2 hover: hover:text-gray-700"
            aria-label="close"
            onClick={closeModal}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <div className="relative w-full lg:w-1/2 group/modal-image">
              <div className="absolute inset-x-0 bottom-0 transition-all duration-300 translate-y-full opacity-0 group-hover/modal-image:opacity-100 group-hover/modal-image:translate-y-0">
                <Link
                  onClick={closeModal}
                  to={`products/${product.id}`}
                  className="cursor-pointer w-full bg-primary-950 hover:bg-primary-900 text-white text-center px-4 py-3 text-[13px] font-semibold flex justify-center"
                >
                  VER DETALLES
                </Link>
              </div>
              <img
                src={product.image}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full h-auto px-4 pb-5 overflow-y-auto lg:w-1/2 pt-7">
              <h1 className="text-[26px] font-medium font-poppins mb-4">
                {product.name}
              </h1>
              <p className="text-sm text-pretty text-[#777777] mb-4">
                {product.description}
              </p>
              <div className="w-full mb-4 border-2 px-4 py-1.5 border-green-500 rounded-lg">
                <span className="block mb-1 text-lg font-semibold text-green-500">
                  {priceText}
                </span>
                {product.discounts.map((discount, index) => (
                  <p
                    key={`${product.id}-discount-${index}`}
                    className="text-tinny text-[#6a6a6a] font-semibold"
                  >
                    *{discount.amount}% Adicional para pago con{' '}
                    {Payments.get(discount.method)}.
                  </p>
                ))}
              </div>
              <div>
                <span className="block mb-2.5 text-sm font-semibold text-black">
                  Almacén:
                </span>
                <div>
                  <ul className="flex items-center gap-2 [&>*>span]:border [&>*>span]:border-gray-300 [&>*>span]:bg-white [&>*>span]:px-3 [&>*>span]:py-1 [&>*>span]:rounded-md [&>*>span]:cursor-pointer [&>*>span:hover]:border-gray-300 [&>*>span:hover]:border-2 transition-all mb-5">
                    {product?.warehouses.map((warehouse) => (
                      <li
                        key={warehouse.id}
                        onClick={() => setWarehouse(warehouse.id)}
                      >
                        <span
                          className={
                            cartWarehouse === warehouse.id
                              ? '!border-2 !border-black'
                              : ''
                          }
                        >
                          {warehouse.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {(Number(cartWarehouse) || 0) === 0 && (
                    <span className="block mb-2.5 text-sm font-semibold text-black">
                      Seleccione un almacén
                    </span>
                  )}

                  <div
                    className="flex flex-col items-start gap-5"
                    style={{ display: 'none' }}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Limpiar
                    </button>
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
                        <span>22</span> Disponibles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex gap-4 mb-6 mt-7">
                <div className="relative">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="w-24 h-full px-4 py-2 text-sm leading-normal text-center text-gray-500 bg-white border border-gray-200 rounded-full outline-none appearance-none text-bread"
                      />
                    )}
                    name="cartAmount"
                  />
                  <div className="absolute inset-y-0 py-3 pl-2 border-r border-gray-200">
                    <button
                      onClick={subtractOne}
                      className="flex items-center justify-center w-5 h-5 text-lg text-gray-600 transition-all duration-300 ease-in-out bg-white rounded-full"
                      style={{ outline: 'none' }}
                    >
                      -
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 py-3 pr-2 border-l border-gray-200">
                    <button
                      onClick={addOne}
                      className="flex items-center justify-center w-5 h-5 text-lg text-gray-600 transition-all duration-300 ease-in-out bg-white rounded-full outline-none"
                      style={{ outline: 'none' }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={addToCart}
                  disabled={!formValid || cartFormLoading}
                  className={`px-4 py-2 font-bold leading-normal text-white transition-all duration-300 ease-in-out border rounded-full appearance-none ${formValid && !cartFormLoading ? 'bg-primary-950 hover:bg-primary-900 border-primary-950 hover:border-primary-900' : 'bg-gray-400'} text-[13px] max-w-fit`}
                >
                  AÑADIR AL CARRITO
                </button>
              </div>
              <ul className="text-sm text-[#777777] pt-6 border-t">
                <li>
                  <strong className="!text-black">Stock:</strong>{' '}
                  {product?.stock}
                </li>
                <li>
                  <strong className="!text-black">SKU:</strong> {product?.sku}
                </li>
                <li>
                  <strong className="!text-black">Categorías: </strong>
                  {product?.categories.map((category, index) => (
                    <div key={category.id} style={{ display: 'contents' }}>
                      <a className="cursor-pointer hover:text-primary-950">
                        {category.name.toUpperCase()}
                      </a>
                      {index === product.categories.length - 1 ? '' : ','}
                    </div>
                  ))}
                </li>
                <li>
                  <strong className="!text-black">Tags: </strong>
                  {product?.tags.map((tag, index) => (
                    <div key={tag.id} style={{ display: 'contents' }}>
                      <a className="cursor-pointer hover:text-primary-950">
                        {tag.name.toUpperCase()}
                      </a>
                      {index === product.tags.length - 1 ? '' : ','}
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

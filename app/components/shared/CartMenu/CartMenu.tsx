import { useEffect, useMemo, useRef } from 'react';
import { Link } from '@remix-run/react';

/* Extra */
import { useDispatch, useSelector } from 'react-redux';

/* Project */
import {
  loadStorageCart,
  productPrice,
  productSymbol,
} from '~/helpers/app.helpers';
import { AppState } from '~/store/config';
import { CartActions } from '~/store/cart.store';
import { useOutside } from '~/hooks';
import './CartMenu.css';

export const CartMenu = () => {
  const cartPreviewRef = useRef(null);

  const dispatch = useDispatch();

  const display = useSelector((state: AppState) => state.cart.cartMenu);
  const cartProducts = useSelector((state: AppState) => state.cart.cart);
  const selectedCurrency = useSelector(
    (state: AppState) => state.home.currency,
  );

  const cartProductsTotal = useMemo(() => {
    const cartTotalAMount = cartProducts.reduce((acc, product) => {
      return acc + productPrice(selectedCurrency, product) * product.quantity;
    }, 0);

    return Math.round((cartTotalAMount + Number.EPSILON) * 100) / 100;
  }, [cartProducts, selectedCurrency]);

  const closeCartMenu = () => {
    dispatch(CartActions.hideCartMenu());
  };

  const removeCartProduct = (productSku: number) => {
    const productToRemove = cartProducts.find(
      (product) => product.id === productSku,
    );

    if (productToRemove) {
      dispatch(
        CartActions.removeProductFromCart({
          cartProduct: productToRemove,
        }),
      );
    }
  };

  useOutside(cartPreviewRef, closeCartMenu, display);

  useEffect(() => {
    loadStorageCart().then((cart) => {
      dispatch(CartActions.replaceCart({ cart }));
    });
  }, [dispatch]);

  return (
    <div
      className={`mb-[50px] fixed w-full h-full max-w-[340px] bg-white top-0 right-0 z-50 flex-col cart-modal ${display && 'show'}`}
      ref={cartPreviewRef}
    >
      <div className="flex justify-between gap-4 p-4 mb-2 border-b">
        <span className="text-xl font-semibold font-poppins">
          CARRITO DE COMPRAS
        </span>
        <button type="button" onClick={closeCartMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="relative flex-auto">
          <div className="absolute inset-0 max-h-full overflow-hidden overflow-y-auto">
            <ul>
              {cartProducts.map((product) => (
                <li
                  key={`cart-${product.id}`}
                  className="relative flex items-start gap-4 px-4 py-2 hover:bg-gray-50 mx-2"
                >
                  <button
                    onClick={() => removeCartProduct(product.id)}
                    type="button"
                    className="absolute top-0 cursor-pointer right-1"
                  >
                    <svg
                      className="w-3 h-3"
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
                  <a href="#" className="flex-shrink-0">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="w-[65px] h-[65px] object-contain"
                    />
                  </a>
                  <div>
                    <span className="block mb-2 text-sm font-medium leading-none text-primary-950 font-poppins">
                      {product.name}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {product.quantity}x
                      <span className="font-semibold text-primary-700">
                        {productSymbol(selectedCurrency)}{' '}
                        {productPrice(selectedCurrency, product)}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-[0_0_auto] pb-[90px] px-4">
          <div className="flex items-center justify-between px-4 mb-6">
            <span className="text-lg font-semibold">SUBTOTAL:</span>
            <span className="text-xl font-semibold text-primary-700">
              {productSymbol(selectedCurrency)} {cartProductsTotal.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <Link
              onClick={closeCartMenu}
              to="/"
              className="block w-full px-4 py-2 text-center uppercase rounded-full bg-gray-50 text-[13px] font-semibold hover:bg-gray-100"
            >
              Ver carrito
            </Link>
            <Link
              onClick={closeCartMenu}
              to="/"
              className="block w-full px-4 py-2 text-center uppercase bg-primary-950 hover:bg-primary-900 text-[13px] font-semibold text-white rounded-full"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

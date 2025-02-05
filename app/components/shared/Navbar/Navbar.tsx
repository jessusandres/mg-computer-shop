import { useMemo, useRef, useState } from 'react';
import { Link } from '@remix-run/react';

/* Extra */
import { useDispatch, useSelector } from 'react-redux';

/* Project */
import Menus from '~/data/menus.json';
import Currencies from '~/data/currencies.json';
import Categories from '~/data/categories.json';
import { NavbarItem } from '~/components/shared/NavbarItem';
import { AppState } from '~/store/config';
import { HomeActions } from '~/store/home.store';
import { useOutside } from '~/hooks';
import './Navbar.css';

export const Navbar = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [showCurrency, setShowCurrency] = useState(false);
  const currencyDivRef = useRef(null);

  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: AppState) => state.home.selectedCurrency,
  );
  const displayCategoriesMenu = useSelector(
    (state: AppState) => state.home.categoriesMenu,
  );
  const categories = useMemo(() => Categories, []);
  const menus = useMemo(() => Menus, []);

  const toggleDisplayMenu = () => {
    setShowCurrency((show) => !show);
  };

  const setCurrency = (term: string) => {
    dispatch(
      HomeActions.setSelectedCurrency({
        currency: Currencies.find((c) => c.term === term),
      }),
    );
    toggleDisplayMenu();
  };

  useOutside(currencyDivRef, toggleDisplayMenu, showCurrency);

  return (
    <div className="h-[53px] bg-primary-900 text-white lg:flex justify-center items-center text-[13px] uppercase font-bold hidden">
      <div className="w-full px-4 mx-auto max-w-df">
        <div className="flex items-center justify-between">
          <div className="flex items-center sm:gap-5 lg:gap-10">
            <div
              className="flex items-center justify-between min-w-64 relative py-[15px] cursor-pointer"
              onClick={toggleDisplayMenu}
            >
              <div className="inline-flex items-center gap-2">
                <img
                  src="/icons/menu-white.svg"
                  alt="menu"
                  className="w-6 h-6"
                />
                <span className="leading-none">TODAS LAS CATEGORÍAS</span>
                <div
                  className={`absolute w-full bg-white border top-full z-40 lg:!block navbar-menu ${displayCategoriesMenu && 'show'}`}
                >
                  <nav>
                    <ul className="flex flex-col [&>li>a]:flex [&>li>a]:items-center [&>li>a]:px-[18px] [&>li>a]:py-3.5 [&>li>a]:gap-2 [&>li>a]:font-semibold [&>li>a]:text-sm [&>li>a:hover]:bg-gray-50 uppercase [&>li>a]:after:content-rowd [&>li>a]:after:size-4 [&>li>a]:relative [&>li>a]:after:absolute [&>li>a]:after:right-4 [&>li>a]:after:-rotate-90 [&>li>a]:after:opacity-50 divide-y *:relative text-[#333]">
                      {categories.map((category) => (
                        <NavbarItem
                          key={category.id}
                          category={category}
                          selectedCategoryId={selectedCategoryId}
                          setSelectedCategoryId={(id) =>
                            setSelectedCategoryId(id)
                          }
                        />
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="strokeWidth"
                className="w-4 h-4"
                stroke="#FFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <nav>
              <ul className="flex items-center sm:gap-3 lg:gap-5 [&>*>a:hover]:opacity-80">
                {menus.map((menu) => (
                  <li key={menu.link} className="md:text-xs">
                    <Link to={menu.link}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div ref={currencyDivRef} className="flex items-center gap-4">
            <div className="relative text-[#474747] font-semibold">
              <button
                type="button"
                className={`bg-white text-sm px-3 py-1.5 rounded-md ${showCurrency ? 'rounded-t-md rounded-b-none' : ''}`}
                onClick={() => setShowCurrency(!showCurrency)}
              >
                {selectedCurrency.term}, {selectedCurrency.symbol}
              </button>
              <div
                className="absolute inset-x-0 z-10"
                style={{ display: showCurrency ? '' : 'none' }}
              >
                {Currencies.filter(
                  (currency) => currency.term !== selectedCurrency.term,
                ).map((currency, index) => (
                  <button
                    id={`btn-currency-${currency.term}`}
                    key={currency.term}
                    className={`w-full p-3 bg-white border shadow rounded-b-md ${index === Currencies.length - 1 ? '' : 'rounded-b-none'} md:text-xs`}
                    onClick={() => setCurrency(currency.term)}
                  >
                    {currency.term}, {currency.symbol}
                  </button>
                ))}
              </div>
            </div>
            <div
              className="inline-flex items-center gap-2"
              style={{ display: 'none' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="stroke"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <span>Envíos</span>
            </div>
            <span className="pl-2 border-l border-gray-500 text-tinny md:text-xs">
              T.C S/. 3.65
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from '@remix-run/react';
import { useState } from 'react';

/* Extra */
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Dropdown, Tooltip } from 'flowbite-react';

/* Project */
import { AppDispatch, AppState } from '~/store/config';
import { HomeActions } from '~/store/home.store';
import { CartActions } from '~/store/cart.store';
import './Header.css';

export const Header = () => {
  const [categories] = useState([]);
  const [initials] = useState(null);

  const user = useSelector((state: AppState) => state.home.user);
  const dispatch = useDispatch<AppDispatch>();

  console.log({ user });

  const openSidebarMenu = () => {
    dispatch(HomeActions.showSidebar());
  };

  const toggleMenu = () => {
    console.log('toggleMenu');
  };

  const logout = () => {
    dispatch(HomeActions.removeUser());
  };

  const openCart = () => {
    dispatch(CartActions.showCartMenu());
  };

  const login = () => {
    dispatch(
      HomeActions.setUser({
        user: {
          email: 'jesus@test.com',
          avatar:
            'https://lh3.googleusercontent.com/a/ACg8ocKag-g8W5Q0oQg__wlbziRNCrK5YSHeX2e-9CGBomW010v4M80=s96-c',
          name: 'Jesús Andrés',
        },
      }),
    );
  };

  return (
    <header className="pt-[5px] border-b">
      <div className="px-4 mx-auto max-w-df">
        <div className="h-16 lg:h-[105px] flex items-center gap-4 justify-between">
          <button
            id="menu-button"
            type="button"
            className="lg:hidden"
            onClick={openSidebarMenu}
          >
            <img src="/icons/menu.svg" alt="menu" className="size-5" />
          </button>

          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="size-16 lg:size-[156px] object-contain"
            />
          </Link>

          <div className="relative flex-grow hidden lg:block">
            <input
              type="search"
              className="w-full border border-gray-200 rounded-full h-[46px] pl-[15px] pr-[230px]"
              placeholder="Buscar productos..."
            />
            <div>
              <button
                type="button"
                className="absolute inset-y-0 right-[45px] h-full px-4 bg-white border border-gray-200 text-[13px] text-[#777777] flex items-center w-44 justify-between"
                onClick={toggleMenu}
              >
                <span>CATEGORÍAS</span>
                <img src="/icons/rowd.svg" alt="rowd" className="size-3" />
              </button>

              <div
                className="absolute right-[45px] px-5 py-2 bg-white border
                            border-gray-200 shadow text-[#777777] text-sm
                            uppercase h-[320px] overflow-y-auto
                            scrollbar-thin scrollbar-thumb-gray-300
                            hover:scrollbar-thumb-gray-500
                            scrollbar-track-gray-100 z-10
                            navbar-categories {{ displayMenu  ? 'show' : 'hide' }}"
              >
                <ul className="space-y-2 [&>*>a:hover]:text-primary-600">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link to="/public">{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-y-0 right-0 w-[50px] flex items-center justify-center">
                <img src="/icons/search.svg" alt="search" className="size-5" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 lg:gap-4">
            {user && (
              <div>
                <Dropdown
                  label={
                    user.avatar ? (
                      <Avatar alt="User settings" img={user.avatar} rounded />
                    ) : (
                      <span
                        className="text-white w-8 h-8 rounded-full"
                        style={{ alignContent: 'center' }}
                      >
                        {initials}
                      </span>
                    )
                  }
                  arrowIcon={false}
                  inline
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user.name}</span>
                    <span className="block truncate text-sm font-medium">
                      {user.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            )}

            <div
              id="dropdownAvatar"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div
                  data-tooltip-target="full-name-tooltip"
                  data-tooltip-placement="top"
                >
                  {user?.name}
                </div>
                <div
                  className="font-medium truncate"
                  data-tooltip-target="email-tooltip"
                  data-tooltip-placement="bottom"
                >
                  {user?.email}
                </div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <Link
                    to="/public"
                    className="disabled block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Ajustes
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <button
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={logout}
                >
                  Salir
                </button>
              </div>
            </div>

            {!user && (
              <button
                data-tooltip-target="login-tooltip"
                data-tooltip-placement="top"
                type="button"
                className="font-bold text-[13px] uppercase"
                onClick={login}
              >
                <span className="hidden lg:block">Ingresar / Registro</span>
                <img
                  src="/icons/login.svg"
                  alt="login"
                  className="size-5 lg:hidden"
                />
              </button>
            )}

            <button onClick={openCart} className="inline-flex gap-4">
              <div className="relative">
                <span className="absolute -top-[3px] -right-[3px] flex items-center justify-center size-3 text-white bg-primary-900 rounded-full text-[9px]">
                  {0}
                </span>
                <Tooltip content="Carrito" className="text-xs">
                  <img src="/icons/cart.svg" alt="cart" className="size-5" />
                </Tooltip>
              </div>
              <span className="text-[13px] font-bold hidden lg:block">
                S/. 0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

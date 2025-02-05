import { useCallback, useRef, useState } from 'react';

/* Project */
import Categories from '~/data/categories.json';

import { SidebarItem } from '../SidebarItem';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '~/store/config';
import { HomeActions } from '~/store/home.store';
import { useOutside } from '~/hooks';

export const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const showSidebarMenu = useSelector((state: AppState) => state.home.sidebar);
  const dispatch = useDispatch<AppDispatch>();

  const wrapperRef = useRef<any>(null);
  const outsideCallback = useCallback(() => {
    dispatch(HomeActions.hideSidebar());
  }, [dispatch]);

  useOutside(wrapperRef, outsideCallback, showSidebarMenu);

  return (
    <div
      ref={wrapperRef}
      className={`fixed inset-y-0 w-64 bg-white border z-[70] lg:!hidden mobile-menu ${showSidebarMenu ? 'show' : ''}`}
    >
      <nav>
        <ul className="flex flex-col [&>li>a]:flex [&>li>a]:items-center [&>li>a]:px-[18px] [&>li>a]:py-3.5 [&>li>a]:gap-2 [&>li>a]:font-semibold [&>li>a]:text-sm [&>li>hover]:bg-gray-50 uppercase [&>li>a]:relative divide-y *:relative text-[#333]">
          {Categories.map((category) => (
            <SidebarItem
              key={category.id}
              category={category}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

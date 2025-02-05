import { useState } from 'react';
import { TSubCategory } from '~/types';
import { Link } from '@remix-run/react';

type NavbarSubItemProps = {
  subCategory: TSubCategory;
};

export const NavbarSubItem = (props: NavbarSubItemProps) => {
  const { subCategory } = props;

  const [selected, setSelected] = useState(false);

  return (
    <li
      className={selected ? 'font-bold' : 'font-medium'}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <Link
        to="/shopfront/{{subCategory.categoryId}}/{{subCategory.id}}"
        // routerLinkActive="text-primary-600 font-semibold"
      >
        {subCategory.name}
      </Link>
    </li>
  );
};

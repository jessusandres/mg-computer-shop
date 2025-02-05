import { NavLink } from '@remix-run/react';

export const SidebarSubItem = (props: any) => {
  const { subCategory } = props;

  return (
    <li>
      <NavLink
        to={`/shopfront/${subCategory.categoryId}/${subCategory.id}/products`}
        className={({ isActive }) =>
          isActive ? 'text-primary-600 font-semibold' : ''
        }
      >
        {subCategory.name}
      </NavLink>
    </li>
  );
};

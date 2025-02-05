import { TCategory } from '~/types';
import './NavbarItem.css';
import { NavbarSubItem } from '~/components/shared/NavbarSubItem';
import { useSelector } from 'react-redux';
import { AppState } from '~/store/config';

type NavbarItemProps = {
  category: TCategory;
  selectedCategoryId: number;
  setSelectedCategoryId: (id: number) => void;
};

export const NavbarItem = (props: NavbarItemProps) => {
  const { category, setSelectedCategoryId, selectedCategoryId } = props;
  const homeSelectedCategoryId = useSelector(
    (state: AppState) => state.home.selectedCategoryId,
  );

  const isSelected =
    category.id === selectedCategoryId ||
    homeSelectedCategoryId === category.id;

  const removeSelectedCategoryId = () => {
    setSelectedCategoryId(0);
  };

  const itemClick = () => {
    console.log('itemClick');
  };

  return (
    <li
      className={isSelected ? 'bg-gray-200' : ''}
      onMouseEnter={() => setSelectedCategoryId(category.id)}
      onMouseLeave={removeSelectedCategoryId}
      onClick={itemClick}
    >
      <div className="flex items-center px-[18px] py-2.5 font-semibold text-sm">
        <a className="flex items-center flex-grow gap-2">
          <img src={`/icons/${category.svg}`} alt={category.name} />
          {category.name}
        </a>
        <button type="button" className="py-1.5">
          <img
            src={isSelected ? '/icons/rowr.svg' : '/icons/rowd.svg'}
            alt={isSelected ? 'rowd' : 'rowr'}
            className="w-4 h-4"
          />
        </button>
      </div>
      {category.subCategories.length > 0 && (
        <div
          className={`absolute top-0 z-10 w-full bg-white left-full px-4 py-3 border text-sm *:space-y-2 navbar-item ${isSelected && 'show'}`}
        >
          <ul className="[&amp;>*>a:hover]:text-primary-600">
            {category.subCategories.map((subCategory) => (
              <div key={subCategory.id}>
                <NavbarSubItem subCategory={subCategory} />
                <hr />
              </div>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

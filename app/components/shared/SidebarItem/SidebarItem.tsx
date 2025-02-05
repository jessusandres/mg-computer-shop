/* Project */
import { SidebarSubItem } from '../SidebarSubItem';
import './SidebarItem.css';

export const SidebarItem = (props: any) => {
  const { category, setSelectedCategory, selectedCategory } = props;

  const handleRouter = (id: string) => {
    console.log('handleRouter', id);
  };

  const isSelected = selectedCategory === category.id;

  return (
    <li
      className={`${isSelected ? 'bg-gray-100' : ''}`}
      onClick={() => setSelectedCategory(category.id)}
    >
      <div className="flex items-center px-[18px] py-3.5 font-semibold text-sm">
        <a className="flex items-center flex-grow gap-2">
          <img src={`icons/${category.svg}`} alt={category.name} />
          {category.name}
        </a>
        <button type="button" className="py-1.5">
          <img
            src={isSelected ? 'icons/rowd.svg' : 'icons/rowr.svg'}
            alt={isSelected ? 'rowd' : 'rowr'}
            className="w-4 h-4"
          />
        </button>
      </div>

      {Boolean(category.subCategories.length) && (
        <div
          className={`top-0 z-10 w-full bg-white left-full px-4 py-3 border text-sm *:space-y-2 mobile-item ${isSelected && 'show'}`}
        >
          <ul className="[&amp;>*>a:hover]:text-primary-600">
            {category.subCategories.map((subCategory: any) => (
              <div
                key={subCategory.id}
                onClick={() => handleRouter(subCategory.id)}
              >
                <SidebarSubItem subCategory={subCategory} />
                <hr />
              </div>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

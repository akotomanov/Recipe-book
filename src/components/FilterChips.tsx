import { Chip } from './ui/Chip';
import { useCategories } from '../hooks/useCategories';

interface FilterChipsProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function FilterChips({ activeCategory, onCategoryChange }: FilterChipsProps) {
  const { data: categories } = useCategories();

  return (
    <div className="flex gap-2 items-center px-6 lg:px-20 py-2 lg:py-6 overflow-x-auto scrollbar-hide">
      <Chip label="All" isActive={activeCategory === null} onClick={() => onCategoryChange(null)} />
      {categories?.map((cat) => (
        <Chip
          key={cat.idCategory}
          label={cat.strCategory}
          isActive={activeCategory === cat.strCategory}
          onClick={() => onCategoryChange(cat.strCategory)}
        />
      ))}
    </div>
  );
}

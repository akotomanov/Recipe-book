import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterChips } from '../components/FilterChips';
import { RecipeGrid } from '../components/RecipeGrid';
import { useSearchMeals } from '../hooks/useSearchMeals';
import { useMealsByCategory } from '../hooks/useMealsByCategory';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useSearchStore } from '../stores/search';
import { DEBOUNCE_DELAY } from '../lib/constants';

export function HomePage() {
  const desktopQuery = useSearchStore((s) => s.query);
  const setDesktopQuery = useSearchStore((s) => s.setQuery);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const debouncedQuery = useDebouncedValue(desktopQuery, DEBOUNCE_DELAY);

  // Clear category when user starts typing in search (desktop or mobile)
  useEffect(() => {
    if (desktopQuery) setActiveCategory(null);
  }, [desktopQuery]);

  const { data: searchResults, isLoading: isSearching } = useSearchMeals(
    debouncedQuery,
    !activeCategory,
  );

  const { data: categoryResults, isLoading: isFiltering } = useMealsByCategory(activeCategory);

  const handleSearchChange = (value: string) => {
    setDesktopQuery(value);
  };

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    if (category) setDesktopQuery('');
  };

  return (
    <>
      <SearchBar value={desktopQuery} onChange={handleSearchChange} />
      <FilterChips activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      {activeCategory ? (
        <RecipeGrid summaries={categoryResults} isLoading={isFiltering} />
      ) : (
        <RecipeGrid meals={searchResults} isLoading={isSearching} />
      )}
    </>
  );
}

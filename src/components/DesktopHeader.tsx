import { Link } from 'react-router-dom';
import { SearchIcon, HeartIcon, AccountIcon } from './icons';
import { useSearchStore } from '../stores/search';
import logoImg from '../assets/logo.png';
import logoText from '../assets/logo-text.svg';

export function DesktopHeader() {
  const query = useSearchStore((s) => s.query);
  const setQuery = useSearchStore((s) => s.setQuery);

  return (
    <header className="hidden lg:flex items-center gap-6 bg-[#f9fafb] px-20 py-6">
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <img src={logoImg} alt="" className="size-14 object-contain" />
        <img src={logoText} alt="My Recipes" className="h-8" />
      </Link>

      <div className="flex-1 flex items-center gap-4 h-14 rounded-[16px] border border-neutral-3 px-6">
        <SearchIcon className="size-6 text-neutral-3 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a recipe"
          className="flex-1 bg-transparent text-base font-semibold leading-6 tracking-[-0.3px] text-secondary-dark-slate placeholder:text-neutral-3 outline-none"
        />
      </div>

      <Link to="/favorites" className="shrink-0 text-secondary-dark-slate hover:text-primary-deep-berry transition-colors">
        <HeartIcon className="size-8" />
      </Link>
      <Link to="/account" className="shrink-0 text-secondary-dark-slate hover:text-primary-deep-berry transition-colors">
        <AccountIcon className="size-8" />
      </Link>
    </header>
  );
}

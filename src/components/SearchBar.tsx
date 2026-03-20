import { SearchIcon } from './icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-6 py-4 lg:hidden">
      <div className="flex items-center gap-4 h-14 rounded-[16px] border border-neutral-3 px-6">
        <SearchIcon className="size-6 text-neutral-3 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Find a recipe"
          className="flex-1 bg-transparent text-base font-semibold leading-6 tracking-[-0.3px] text-secondary-dark-slate placeholder:text-neutral-3 outline-none"
        />
      </div>
    </div>
  );
}

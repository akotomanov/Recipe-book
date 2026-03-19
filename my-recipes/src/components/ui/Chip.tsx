import { cn } from '../../lib/utils';

interface ChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Chip({ label, isActive, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'shrink-0 rounded-[12px] px-4 py-2 text-[16px] leading-6 tracking-[-0.3px] transition-colors whitespace-nowrap',
        isActive
          ? 'bg-secondary-dark-slate text-secondary-light-blue font-extrabold'
          : 'bg-secondary-light-blue text-secondary-dark-slate font-semibold',
      )}
    >
      {label}
    </button>
  );
}

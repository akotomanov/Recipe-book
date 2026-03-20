import { cn } from '../../lib/utils';

interface InfoChipProps {
  icon: React.ReactNode;
  label: string;
  variant: 'blue' | 'purple';
}

export function InfoChip({ icon, label, variant }: InfoChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-[80px] px-4 py-2 max-h-9',
        variant === 'blue' ? 'bg-feature-blue' : 'bg-feature-purple',
      )}
    >
      {icon}
      <span className="text-sm font-semibold leading-5 text-secondary-dark-slate">{label}</span>
    </div>
  );
}

import { FlameIcon } from '../icons';
import { cn } from '../../lib/utils';
import { MAX_SPICY } from '../../lib/constants';

interface SpicyScaleProps {
  level: number;
}

export function SpicyScale({ level }: SpicyScaleProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: MAX_SPICY }, (_, i) => (
        <FlameIcon
          key={i}
          filled={i < level}
          className={cn('size-5', i < level ? 'text-spicy-filled' : 'text-spicy-outline')}
        />
      ))}
    </div>
  );
}

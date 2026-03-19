import { Skeleton } from '../ui/Skeleton';

export function RecipeCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-[203px] w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-9 w-20 rounded-full" />
        <Skeleton className="h-9 w-20 rounded-full" />
      </div>
      <Skeleton className="h-8 w-3/4 rounded-lg" />
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  );
}

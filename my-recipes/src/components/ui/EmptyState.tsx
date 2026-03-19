interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="text-6xl mb-4">&#127858;</div>
      <h2 className="text-xl font-extrabold text-secondary-dark-slate mb-2">{title}</h2>
      <p className="text-sm font-semibold text-neutral-2">{description}</p>
    </div>
  );
}

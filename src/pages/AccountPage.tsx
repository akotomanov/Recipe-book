import { AccountIcon } from '../components/icons';
import { useFavoritesStore } from '../stores/favorites';

export function AccountPage() {
  const favCount = useFavoritesStore((s) => s.favorites.length);

  return (
    <div className="flex flex-col items-center py-16 px-6">
      <div className="bg-secondary-light-blue rounded-full p-6 mb-6">
        <AccountIcon className="size-16 text-secondary-dark-slate" />
      </div>
      <h2 className="font-extrabold text-2xl leading-8 tracking-[-0.6px] text-secondary-dark-slate mb-2">
        My Account
      </h2>
      <p className="text-sm font-semibold text-neutral-2 mb-8">
        Account features coming soon
      </p>

      <div className="w-full max-w-sm bg-secondary-light-blue rounded-[16px] p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-base text-secondary-dark-slate">Saved recipes</span>
          <span className="font-extrabold text-base text-primary-deep-berry">{favCount}</span>
        </div>
      </div>
    </div>
  );
}

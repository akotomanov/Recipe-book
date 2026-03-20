import { NavLink } from 'react-router-dom';
import { HomeIcon, AccountIcon, HeartIcon } from '../icons';
import { cn } from '../../lib/utils';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white z-50 lg:hidden">
      <div className="flex items-center justify-center py-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn('flex flex-1 flex-col items-center gap-1 py-3', isActive ? 'text-primary-deep-berry' : 'text-secondary-dark-slate')
          }
        >
          {({ isActive }) => (
            <>
              <HomeIcon className="size-6" />
              <span className={cn('text-sm leading-5', isActive ? 'font-extrabold' : 'font-semibold')}>Home</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            cn('flex flex-1 flex-col items-center gap-1 py-3', isActive ? 'text-primary-deep-berry' : 'text-secondary-dark-slate')
          }
        >
          {({ isActive }) => (
            <>
              <HeartIcon filled={isActive} className="size-6" />
              <span className={cn('text-sm leading-5', isActive ? 'font-extrabold' : 'font-semibold')}>Favourites</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            cn('flex flex-1 flex-col items-center gap-1 py-3', isActive ? 'text-primary-deep-berry' : 'text-secondary-dark-slate')
          }
        >
          {({ isActive }) => (
            <>
              <AccountIcon className="size-6" />
              <span className={cn('text-sm leading-5', isActive ? 'font-extrabold' : 'font-semibold')}>Account</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

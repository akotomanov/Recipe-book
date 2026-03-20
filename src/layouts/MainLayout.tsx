import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar';
import { DesktopHeader } from '../components/DesktopHeader';
import { BottomNav } from '../components/Navigation/BottomNav';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <DesktopHeader />
      <div className="py-6 lg:hidden">
        <AppBar />
      </div>
      <main className="flex-1 pb-24 lg:pb-6">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

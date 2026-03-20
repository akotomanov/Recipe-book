import logoImg from '../assets/logo.png';
import logoText from '../assets/logo-text.svg';

export function AppBar() {
  return (
    <header className="flex items-center justify-center gap-2 h-16 px-6 shrink-0 lg:hidden">
      <img src={logoImg} alt="" className="size-14 object-contain" />
      <img src={logoText} alt="My Recipes" className="h-8" />
    </header>
  );
}

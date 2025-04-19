import CharsButton from './CharsButton';
import SettingsButton from './SettingsButton'

function Header() {
  return (
    <header className="flex bg-theme-3 border-3 border-theme-2 rounded-2xl min-h-[110px] justify-between items-center relative w-[100%] z-3">
      <SettingsButton/>
      <CharsButton/>
    </header>
  );
}

export default Header;

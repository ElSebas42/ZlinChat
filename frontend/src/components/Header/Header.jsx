import Settings from "../Settings";
import Chars from "../Chars";
import CharsButton from './CharsButton';
import SettingsButton from './SettingsButton'

function Header() {
  return (
    <div className="flex bg-theme-3 border-3 border-theme-2 rounded-2xl min-h-[110px] justify-between items-center relative w-[100%]">
      <SettingsButton/>
      <CharsButton/>
    </div>
  );
}

export default Header;

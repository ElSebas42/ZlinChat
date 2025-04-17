import { useEffect, useRef, useContext } from "react";
import { MainContext } from "../../context/MainContext";

function Settings() {
  const menuRef = useRef(null);
  const { setIsMenuOpen } = useContext(MainContext);
  const {settingsButtonRef} = useContext(MainContext)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && (!menuRef.current.contains(e.target) && !settingsButtonRef.current.contains(e.target))) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="rounded-xl border-2 border-theme-1 w-[40dvw] h-[80dvh] absolute bg-theme-2 left-0 top-[110px] z-2"
      ref={menuRef}
    >
      Settings
    </div>
  );
}

export default Settings;

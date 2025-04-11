import { useEffect, useRef, useContext } from "react";
import { MainContext } from "../context/MainContext";

function Settings() {
  const menuRef = useRef(null);
  const { setIsMenuOpen } = useContext(MainContext);
  const {settingsButtonRef} = useContext(MainContext)

  useEffect(() => {
    const handelClickOutside = (e) => {
      if (menuRef.current && (!menuRef.current.contains(e.target) && !settingsButtonRef.current.contains(e.target))) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, []);

  return (
    <div
      className="rounded-xl border-2 border-theme-1 w-[850px] h-[750px] absolute bg-theme-2 left-0 top-[110px]"
      ref={menuRef}
    >
      Settings
    </div>
  );
}

export default Settings;

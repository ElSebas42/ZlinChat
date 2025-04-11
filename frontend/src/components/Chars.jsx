import { useEffect, useRef, useContext } from "react";
import { MainContext } from "../context/MainContext";

function Chars() {
  const menuRef = useRef(null);
  const { setIsMenuOpen } = useContext(MainContext);
  const { charsButtonRef } = useContext(MainContext);

  useEffect(() => {
    const handelClickOutside = (e) => {
      if (menuRef.current && (!menuRef.current.contains(e.target) && !charsButtonRef.current.contains(e.target))) {
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
      className="rounded-xl border-2 border-theme-1 w-[850px] h-[750px] absolute right-0 bg-theme-2 top-[110px]"
      ref={menuRef}
    >
      Chars
    </div>
  );
}

export default Chars;

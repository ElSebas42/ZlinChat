import { useEffect, useRef, useContext } from "react";
import { MainContext } from "../../context/MainContext";

function Chars() {
  const menuRef = useRef(null);
  const { setIsMenuOpen } = useContext(MainContext);
  const { charsButtonRef } = useContext(MainContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && (!menuRef.current.contains(e.target) && !charsButtonRef.current.contains(e.target))) {
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
      className="rounded-xl border-2 border-theme-1 w-[40dvw] h-[80dvh] absolute right-0 bg-theme-2 top-[110px] z-2"
      ref={menuRef}
    >
      Chars
    </div>
  );
}

export default Chars;

import { FiUsers } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

function CharsButton() {
  const { isMenuOpen } = useContext(MainContext);
  const { setIsMenuOpen } = useContext(MainContext);
  const { setWhatMenu } = useContext(MainContext);

  const { charsButtonRef } = useContext(MainContext);

  return (
    <button
      className="border-2 rounded-3xl aspect-square w-20 relative mr-2 bg-theme-4 cursor-pointer"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
        setWhatMenu(true);
      }}
      ref={charsButtonRef}
    >
      <IconContext.Provider value={{ color: "white" }}>
        <FiUsers className="h-10 w-10 absolute inset-0 m-auto" />
      </IconContext.Provider>
      <span className="text-xs absolute left-0 right-0 top-h bottom-0 m-auto">
        Characters
      </span>
    </button>
  );
}
export default CharsButton;

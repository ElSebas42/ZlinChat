import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

function SettingsButton() {
  const { isMenuOpen } = useContext(MainContext);
  const { setIsMenuOpen } = useContext(MainContext);
  const { setWhatMenu } = useContext(MainContext);

  const { settingsButtonRef } = useContext(MainContext);
  return (
    <button
      className="border-2 rounded-3xl aspect-square w-20 relative ml-2 bg-theme-4 cursor-pointer"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
        setWhatMenu(false);
      }}
      ref={settingsButtonRef}
    >
      <IconContext.Provider value={{ color: "white" }}>
        <FiSettings className="h-10 w-10 absolute inset-0 m-auto" />
      </IconContext.Provider>
      <span className="text-xs absolute left-0 right-0 top-h bottom-0 m-auto">
        Settings
      </span>
    </button>
  );
}

export default SettingsButton;

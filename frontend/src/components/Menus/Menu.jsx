import Settings from "./Settings";
import Chars from "./Chars";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

function Menu() {
  const {whatMenu} = useContext(MainContext) 

  return (
    <>
      {!whatMenu && <Settings/>}
      {whatMenu && <Chars/>}
    </>
  );
}

export default Menu;

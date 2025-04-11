import Settings from "./Settings";
import Chars from "./Chars";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

function Menu() {
  const {WhatMenu} = useContext(MainContext) 

  return (
    <>
      {!WhatMenu && <Settings/>}
      {WhatMenu && <Chars/>}
    </>
  );
}

export default Menu;

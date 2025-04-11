import { useContext } from "react";
import Settings from "./Settings";
import Chars from "./Chars";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import {MainContext} from '../context/MainContext'

function Header() {
  const {MenuOpen} = useContext(MainContext)
  const {setMenuOpen} = useContext(MainContext)
  const {WhatMenu} = useContext(MainContext)
  const {setWhatMenu} = useContext(MainContext)


  return (
    <div className="flex bg-theme-3 border-3 border-theme-2 rounded-2xl min-h-30 justify-between items-center relative">
      <button
        className="border-2 rounded-3xl aspect-square w-20 relative ml-2 bg-theme-4"
        onClick={() => {
          setMenuOpen(!MenuOpen);
          setWhatMenu(false)
        }}
      >
        <IconContext.Provider value={{ color: "white" }}>
          <FiSettings className="h-10 w-10 absolute inset-0 m-auto" />
        </IconContext.Provider>
        <span className="text-xs absolute left-0 right-0 top-h bottom-0 m-auto">
          Settings
        </span>
      </button>
      <button className="border-2 rounded-3xl aspect-square w-20 relative mr-2 bg-theme-4" onClick={() => {
          setMenuOpen(!MenuOpen);
          setWhatMenu(true)
        }}>
        <IconContext.Provider value={{ color: "white" }}>
          <FiUsers className="h-10 w-10 absolute inset-0 m-auto" />
        </IconContext.Provider>
        <span className="text-xs absolute left-0 right-0 top-h bottom-0 m-auto">
          Characters
        </span>
      </button>
    </div>
  );
}

export default Header;

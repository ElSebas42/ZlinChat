import { createContext } from "react";
import {useState} from 'react'

export const MainContext = createContext();

export function MainContextProvider({children}) {
  const [MenuOpen, setMenuOpen] = useState(false);

  const [WhatMenu, setWhatMenu] = useState(false)

  return <>
    <MainContext.Provider value={{MenuOpen, setMenuOpen, WhatMenu, setWhatMenu}}>{children}</MainContext.Provider>
  </>
}

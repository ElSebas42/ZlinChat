import { createContext } from "react";
import {useState, useRef} from 'react'

export const MainContext = createContext();

export function MainContextProvider({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [whatMenu, setWhatMenu] = useState(false)

  const settingsButtonRef = useRef(null);
  const charsButtonRef = useRef(null);

  return <>
    <MainContext.Provider value={{isMenuOpen, setIsMenuOpen, whatMenu, setWhatMenu, settingsButtonRef, charsButtonRef}}>{children}</MainContext.Provider>
  </>
}

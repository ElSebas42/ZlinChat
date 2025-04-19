import { createContext } from "react";
import {useState, useRef} from 'react';

export const MainContext = createContext();

export function MainContextProvider({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [whatMenu, setWhatMenu] = useState(false)
  const settingsButtonRef = useRef(null);
  const charsButtonRef = useRef(null);
  const API_URL = "http://localhost:8000";

  return <>
    <MainContext.Provider value={{isMenuOpen, setIsMenuOpen, whatMenu, setWhatMenu, settingsButtonRef, charsButtonRef, API_URL}}>{children}</MainContext.Provider>
  </>
}

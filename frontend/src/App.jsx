import { useContext } from "react";
//###
import { MainContext } from "./context/MainContext";
//###
import Header from "./components/Header/Header";
import Menu from "./components/Menus/Menu";
import Chat from "./components/Chat/Chat";
import ChatInput from './components/Chat/ChatInput/ChatInput'

function App() {
  const { isMenuOpen } = useContext(MainContext);
  return (
    <div className="bg-theme-4 text-white min-h-dvh font-default text-xl relative flex flex-col items-center h-[100dvh] w-[100dvw] z-0">
      <Header />
      {isMenuOpen && <Menu />}
      <Chat />
      <ChatInput />
    </div>
  );
}

export default App;

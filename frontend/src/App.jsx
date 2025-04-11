import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Menu from './components/Menu'
import { MainContext } from "./context/MainContext";

function App() {
  const { MenuOpen } = useContext(MainContext);
  return (
    <div className="bg-theme-4 text-white min-h-dvh font-default text-xl relative">
      <Header />
      {MenuOpen && <Menu />}
    </div>
  );
}

export default App;

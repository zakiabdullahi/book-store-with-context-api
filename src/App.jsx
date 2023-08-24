import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import { DarkModeContext } from "./Contexts/DarkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <div className="py-16 dark:bg-slate-900">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;

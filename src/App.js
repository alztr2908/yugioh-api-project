import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Directory from "./Screens/Directory";
import Card from "./Screens/Card";

const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Home />
      </ThemeContext.Provider>
    </>
  );
}

export default App;

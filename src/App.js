import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeContextProvider } from "./ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Directory from "./Screens/Directory";
import Card from "./Screens/Card";

const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function App() {
    return (
        <>
            <ThemeContextProvider>
                <Home />
            </ThemeContextProvider>
        </>
    );
}

export default App;

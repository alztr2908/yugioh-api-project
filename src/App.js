import { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.less";
import { ThemeContextProvider } from "./ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Directory from "./Screens/Directory";
import Card from "./Screens/Card";

function App() {
    return (
        <div>
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <ThemeContextProvider>
                        <Route exact path="/" component={Home} />
                        <Route path="/Directory" component={Directory} />
                        <Route path="/Card" component={Card} />
                    </ThemeContextProvider>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

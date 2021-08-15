import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Directory from "./Screens/Directory";
import Card from "./Screens/Card";

const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function App() {
  useEffect(() => {
    async function fetchData() {
      let response = await getData(baseURL);
      let cardItems = response.data.slice(0, 5);
      await loadData(cardItems);
    }
    fetchData();
  }, []);

  async function getData(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        resolve(res.data);
        // console.log(res.data.data.slice(0, 5));
      });
    });
  }

  async function loadData(data) {
    console.log(data);
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Directory" component={Directory} />
        <Route path="/Card" component={Card} />
      </Switch>
    </Router>
  );
}

export default App;

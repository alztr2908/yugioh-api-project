import Navbar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Directory from "./Screens/Directory";
import Card from "./Screens/Card";

const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function App() {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response = await getData(baseURL);
      await loadData(response.data[0]);
      setLoading(false);
    }
    fetchData();
  }, []);

  async function getData(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        resolve(res.data);
        console.log(res.data.data);
      });
    });
  }

  async function loadData(data) {
    setCard(data);
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

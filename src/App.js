import Navbar from "./Components/Navbar";

import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;

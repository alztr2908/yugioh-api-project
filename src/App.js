import axios from "axios";
import { useEffect, useState } from "react";

const baseURL =
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon";

function App() {
  const [pokemon, setPokemon] = useState([]);
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
      });
    });
  }

  async function loadData(data) {
    setPokemon(data);
  }

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <img src={pokemon.card_images[0].image_url} alt='#' />
          <h1>{pokemon.atk}</h1>
          {pokemon.card_sets.map((set) => (
            <div key={set.set_code}>
              <h2>{set.set_name}</h2>
              <p>{set.set_price}</p>
              <p>{set.set_rarity}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./components/Currency";
import { BASE_URL } from "./utils/constants";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cryptoApp">
      <div className="cryptoApp__search">
        <h1 className="cryptoApp__text">Søk etter en valuta</h1>
        <form>
          <input
            className="cryptoApp__input"
            type="text"
            onChange={handleChange}
            placeholder="Søk"
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Currency
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;

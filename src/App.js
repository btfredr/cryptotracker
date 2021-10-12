import axios from "axios";
import { useState, useEffect } from "react";
import Currency from "./components/Currency";
import { BASE_URL } from "./utils/constants";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setCurrencies(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCurrencies = currencies.filter((currency) => {
    currency.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="cryptoApp">
      <div className="cryptoApp__search">
        <h1 className="cryptoApp__h1">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="cryptoApp__input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCurrencies.map((currency) => {
        return (
          <Currency
            key={currency.id}
            name={currency.name}
            price={currency.current_price}
            symbol={currency.symbol}
            image={currency.image}
            volume={currency.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;

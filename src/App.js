import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "./utils/constants";

function App() {
  const [currency, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setCurrencies(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cryptoApp">
      <div className="cryptoApp__search">
        <h1 className="cryptoApp__h1">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="cryptoApp__input"
          />
        </form>
      </div>
    </div>
  );
}

export default App;

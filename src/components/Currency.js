import React from "react";

const Currency = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="currency">
      <div className="currency__row">
        <div className="currency__item">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="currency__symbol">{symbol}</p>
        </div>
        <div className="currency__data">
          <p className="currency__price">{price} NOK</p>
          <p className="currency__volume">{volume.toLocaleString()} NOK</p>

          {priceChange < 0 ? (
            <p className="currency__percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="currency__percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="currency__marketcap">
            Markedsverdi: {marketcap.toLocaleString()} NOK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Currency;

const Currency = ({ name, image, symbol, price, volume }) => {
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
          <p className="currency__volume">{volume.toLocalString()} NOK</p>
        </div>
      </div>
    </div>
  );
};

export default Currency;

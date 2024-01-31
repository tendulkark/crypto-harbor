import React from "react";
import { useState, useEffect } from "react";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";

const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en"
    ).then((res) => {
      res.json().then((response) => {
        // console.log("useEffect response", response);
        setData(response);
      });
    });
  };

  // console.log("Data Response", data);
  let newData = [];
  newData = data.slice();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="home-content__text">
            <img src={btc} alt="btc-float" className="btc-float"></img>
            <p>
              Track and Trade <br></br>
              <span>Crypto currencies</span>
            </p>
            <img src={eth} alt="eth-float" className="eth-float"></img>
          </div>

          <div className="home_values">
            {newData.map((item) => (
              <article key={item.id} className="slider-coin">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="slider-coin__image"
                ></img>
                <p className="slider-coin__name">
                  {item?.name}
                  <span
                    className={
                      "slider-coin__price " +
                      (item.price_change_percentage_24h <= 0
                        ? "red-text"
                        : "green-text")
                    }
                  >
                    &nbsp; {item?.price_change_percentage_24h.toFixed(2) + "%"}
                  </span>
                </p>
                <p className="slider-coin__price">
                  {"₹ " + numberWithCommas(item.current_price?.toFixed(2))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
  // return <div className="home"></div>;
};

export default Hero;

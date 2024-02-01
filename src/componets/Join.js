import btc from "../assets/btc.png";
import eth from "../assets/eth.png";

const Join = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="join" id="join">
      <div className="container">
        <div className="join-container">
          <div className="join-content__text">
            <img src={btc} alt="join-btc" className="btc-float"></img>
            <h1>
              join us via <br></br> <span>discord</span>
            </h1>
            <img src={eth} alt="join-eth" className="eth-float" />
          </div>
          <p>Invest and manage all your crypto at one place.</p>
          <div className="join-content__button">
            <button
              type="button"
              onClick={() =>
                openInNewTab("https://discord.com/invite/EhrkaCH/")
              }
            >
              Join Via Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;

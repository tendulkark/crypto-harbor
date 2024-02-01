import wallet from "../assets/wallet.png";
import select from "../assets/select.png";
import transaction from "../assets/transaction.png";
import receive from "../assets/receive.png";
import sell from "../assets/sell.png";
import drive from "../assets/drive.png";
import whyus from "../assets/why-us_btc.png";

const WhyUs = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="container">
        <div className="choose-container">
          <h1>
            Why <span>Choose Us</span>
          </h1>
          <div className="choose-container__content">
            <div className="choose-container__content__1">
              <div className="choose-box">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-wallet"
                  >
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                  </svg>
                </i>
                <div className="choosebox-text">
                  <h4>connect your wallet</h4>
                  <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                </div>
              </div>
              <div className="choose-box">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-pencil-bolt"
                  >
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                    <path d="M13.5 6.5l4 4"></path>
                    <path d="M19 16l-2 3h4l-2 3"></path>
                  </svg>
                </i>
                <div className="choosebox-text">
                  <h4>select your quantity</h4>
                  <p>
                    Upload your crypto and set a title, description and price.
                  </p>
                </div>
              </div>
              <div className="choose-box">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-checklist"
                  >
                    <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
                    <path d="M14 19l2 2l4 -4"></path>
                    <path d="M9 8h4"></path>
                    <path d="M9 12h2"></path>
                  </svg>
                </i>
                <div className="choosebox-text">
                  <h4>confirm transaction</h4>
                  <p>Earn by selling your crypto on our marketplace.</p>
                </div>
              </div>
            </div>
            <div className="choose-container__content__2">
              <img src={whyus} alt="why-choose-us"></img>
            </div>
            <div className="choose-container__content__3">
              <div className="choose-box">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-device-mobile-message"
                  >
                    <path d="M11 3h10v8h-3l-4 2v-2h-3z"></path>
                    <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"></path>
                    <path d="M10 18v.01"></path>
                  </svg>
                </i>
                <div className="choosebox-text">
                  <h4>receive your own nfts</h4>
                  <p>Invest all your crypto at one place on one platform.</p>
                </div>
              </div>
              <div className="choose-box">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-moneybag"
                  >
                    <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z"></path>
                    <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  </svg>
                </i>
                <div className="choosebox-text">
                  <h4>take a market to sell</h4>
                  <p>
                    Discover, collect the right crypto collections to buy or
                    sell.
                  </p>
                </div>
              </div>
              <div className="choose-box">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-stack"
                  >
                    <path d="M12 6l-8 4l8 4l8 -4l-8 -4"></path>
                    <path d="M4 14l8 4l8 -4"></path>
                  </svg>
                </i>
                <div className="choosebox-text">
                  <h4>drive your collection</h4>
                  <p>We make it easy to Discover, Invest and manage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

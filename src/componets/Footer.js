import caution from "../assets/alert.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content__socials">
        <a
          href="https://twitter.com/coingecko/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="footer-icon"
          >
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
          </svg>
        </a>
        <a
          href="https://discord.com/invite/EhrkaCH/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="footer-icon"
          >
            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
            <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/coingecko/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="footer-icon"
          >
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
          </svg>
        </a>
      </div>
      <div className="footer-content__text">
        <p>Privacy</p>
        <p>Terms and Contidions</p>
      </div>
      <div className="disclaimer">
        <img src={caution} alt="disclaimer-svg"></img>
        <p>Disclaimer: This webpage is not reponsive</p>
      </div>
    </footer>
  );
};

export default Footer;

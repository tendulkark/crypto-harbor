import { useState } from "react";

const NavBar = ({ setResults }) => {
  const [sticky, setSticky] = useState(false);
  const [input, setInput] = useState("");

  const url = `https://api.coingecko.com/api/v3/search?query=${input}`;

  const fetchData = (value) => {
    fetch(url).then((res) =>
      res.json().then((json) => {
        const searchResult = Object.values(json.coins).filter((coin) => {
          return value && coin && coin.name.toLowerCase().includes(value);
        });
        console.log("#Search Result: ", searchResult);
        setResults(searchResult);
      })
    );
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const handleChange = (value) => {
    // console.log(value);
    setInput(value);
    fetchData(value);
  };

  console.log("search :", input);

  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="container">
          <div className="navbar">
            <div>
              <p className="logo" onClick={() => toTop()}>
                CRYPTOHARBOR
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#market">Market</a>
                </li>
                <li>
                  <a href="#whyus">Why Us</a>
                </li>
                <li>
                  <a href="#join">Join</a>
                </li>
              </ul>
            </div>
            <div className="socials-link">
              {/* <span>
                <a href="https://twitter.com/coingecko/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-twitter"
                  >
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                </a>
                <a href="https://www.coingecko.com/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-discord"
                  >
                    <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                    <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
                    <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                  </svg>
                </a>
              </span> */}
              <span className="search-bar">
                <input
                  className="input"
                  placeholder="Search Coin"
                  value={input}
                  onChange={(e) => handleChange(e.target.value)}
                ></input>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// const jsonUrl = "https://jsonplaceholder.typicode.com/users";
// console.log("json return", json);
// console.log(typeof json);
// console.log("coins only", json.coins);
// const result = json.filter((user) => {
//   return (
//     value &&
//     user &&
//     user.name &&
//     user.name.toLowerCase().includes(value)
//   );
// });
// console.log(result);

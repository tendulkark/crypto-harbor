import { useState } from "react";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Join from "./componets/Join";
import MarketUpdate from "./componets/MarketUpdate";
import NavBar from "./componets/NavBar";
import WhyUs from "./componets/WhyUs";
import "./dist/css/style.css";
import SearchResults from "./componets/SearchResults";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <NavBar setResults={setResults} />
      <SearchResults results={results} />
      {/* <Hero />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer /> */}
    </div>
  );
}

export default App;

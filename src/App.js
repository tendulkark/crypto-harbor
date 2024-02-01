import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Join from "./componets/Join";
import MarketUpdate from "./componets/MarketUpdate";
import NavBar from "./componets/NavBar";
import WhyUs from "./componets/WhyUs";
import "./dist/css/style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer />
    </div>
  );
}

export default App;

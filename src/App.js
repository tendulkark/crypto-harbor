import Hero from "./componets/Hero";
import MarketUpdate from "./componets/MarketUpdate";
import NavBar from "./componets/NavBar";
import "./dist/css/style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MarketUpdate />
    </div>
  );
}

export default App;

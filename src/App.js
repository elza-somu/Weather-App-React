import React from "react";
import "./styles.css";
import Forecast from "./Forecast";
import Search from "./Search";
import Footer from "./Footer";
import CurrentTemperature from "./CurrentTemperature";

export default function App() {
  return (
    <div className="App container">
      <CurrentTemperature />
      <Search />
      <Forecast />
      <Footer />
    </div>
  );
}

import React from "react";
import "./styles.css";
import Forecast from "./Forecast";
import Footer from "./Footer";
import CurrentTemperature from "./CurrentTemperature";

export default function App(props) {
  return (
    <div className="App container">
      <CurrentTemperature defaultCity="Toronto" />
      
      <Forecast />
      <Footer />
    </div>
  );
}

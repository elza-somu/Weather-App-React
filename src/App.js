import React from "react";
import "./styles.css";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Search from "./Search";

export default function App(props) {
  return (
    <div className="App container">
      <Search defaultCity="Toronto" />
      
      <Forecast />
      <Footer />
    </div>
  );
}

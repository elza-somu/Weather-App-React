import React from "react";
import "./styles.css";
import Footer from "./Footer";
import Search from "./Search";

export default function App(props) {
  return (
    <div className="App container">
      <Search defaultCity="Toronto" />
      
      
      <Footer />
    </div>
  );
}

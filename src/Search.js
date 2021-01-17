import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="row">
        <div className="col-3"></div>
        <input className="form-control col-5" type="search" name="" id="search" placeholder="Search for a city" autoFocus="on"/>
        <input className="col-2"type="submit" value="Search"/>
      </form>
    </div>
  );
}
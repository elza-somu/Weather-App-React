import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature">
      <div className="row">
        <div class="col">
          <h2>Toronto</h2>
          <i className="fas fa-cloud-rain mainWeather"></i>
        </div>
        <div className="col-12 ">
          <h3>15 October 2020</h3>
        </div>

        <div className="col">
          <h3>10:10pm</h3>
          <p>Rain | Real Feel 15° C</p>
        </div>
        <div className="col">
          <h3 className="currentTemp">
            <div className="float-right">16°C | F</div>
          </h3>
        </div>
      </div>
    </div>
  );
}

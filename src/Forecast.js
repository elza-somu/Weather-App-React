import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <section className="weather">
        <h3>Forecast</h3>

        <div className="row">
          <div className="col">
            <p>Tomorrow</p>
          </div>
          <div className="col">
            <p>17 Oct</p>
          </div>
          <div className="col">
            <p>18 Oct</p>
          </div>
          <div className="col">
            <p>19 Oct</p>
          </div>
          <div className="col">
            <p>20 Oct</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <i class="fas fa-cloud-sun-rain rainCloud"></i>
            </p>
          </div>
          <div className="col">
            <p>
              <i className="fas fa-cloud-sun-rain rainCloud"></i>
            </p>
          </div>
          <div className="col">
            <p>
              <i className="fas fa-cloud-showers-heavy rain"></i>
            </p>
          </div>
          <div className="col">
            <p>
              <i className="fas fa-cloud-sun cloudSun"></i>
            </p>
          </div>
          <div className="col">
            <p>
              <i className="fas fa-cloud-showers-heavy showers"></i>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>11°C</p>
          </div>
          <div className="col">
            <p>13°C</p>
          </div>
          <div className="col">
            <p>15°C</p>
          </div>
          <div className="col">
            <p>10°C</p>
          </div>
          <div className="col">
            <p>12°C</p>
          </div>
        </div>
      </section>
    </div>
  );
}

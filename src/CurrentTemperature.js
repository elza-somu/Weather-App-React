import React from "react";
import FormatDate from "./FormatDate";
import "./CurrentTemperature.css";
import WeatherIcon from "./WeatherIcon"
import TempConversion from "./TempConversion"

export default function CurrentTemperature(props) {
    return (
      <div className="CurrentTemperature">
        <div className="row">
          <div class="col">
            <h2>{props.data.city}</h2>
            <WeatherIcon code={props.data.icon} alt={props.data.description}/>
          </div>
          <div className="col-12 ">
            <h3>
              <FormatDate date={props.data.date} />
            </h3>
          </div>
        </div>
  
        <div className="row">
          <div className="col-3 timeDate">
            <p className="text-capitalize">{props.data.description} </p> 
            <p>Real Feel {Math.round(props.data.realFeel)}° C</p>
          </div>
          <div className="col-6"></div>
          <div className="col currentTemp">
          <TempConversion celsius={props.data.temperature}/>
          </div>
        </div>
      </div>
    );
}

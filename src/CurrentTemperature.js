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
            
          </div>
        </div>
  
        <div className="row">
          <div className="col-3">
            <p className="date">
              <FormatDate date={props.data.date} />
            </p>
            <p className="text-capitalize description">{props.data.description} </p> 
            <p className="wind">Wind Speed: {props.data.wind} km/h </p> 
            
          </div>
          <div className="col-6"></div>
          <div className="col currentTemp">
            <TempConversion celsius={props.data.temperature}/>
            <p className="col realfeel">Real Feel {Math.round(props.data.realFeel)}° C</p>
          </div>
        </div>
      </div>
    );
}

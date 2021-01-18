import React from "react";
import FormatDate from "./FormatDate";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
    return (
      <div className="CurrentTemperature">
        <div className="row">
          <div class="col">
            <h2>{props.city}</h2>
            <p>{props.icon}</p>
          </div>
          <div className="col-12 ">
            <h3>
              <FormatDate date={props.date} />
            </h3>
          </div>
        </div>
  
        <div className="row">
          <div className="col-3 timeDate">
            <h3>10:10pm</h3>
            <p className="text-capitalize">{props.description} </p> 
            <p>Real Feel {Math.round(props.realFeel)}° C</p>
          </div>
          <div className="col-6"></div>
          <div className="col currentTemp">
            <p>{Math.round(props.temperature)}° <span>C </span>| F</p>
          </div>
        </div>
      </div>
    );
}

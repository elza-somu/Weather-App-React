import React from "react";
import FormatDate from "./FormatDate";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
    return (
      <div className="CurrentTemperature">
        <div className="row">
          <div class="col">
            <h2>{props.data.city}</h2>
            <p>{props.data.icon}</p>
          </div>
          <div className="col-12 ">
            <h3>
              <FormatDate date={props.data.date} />
            </h3>
          </div>
        </div>
  
        <div className="row">
          <div className="col-3 timeDate">
            <h3>10:10pm</h3>
            <p className="text-capitalize">{props.data.description} </p> 
            <p>Real Feel {Math.round(props.data.realFeel)}° C</p>
          </div>
          <div className="col-6"></div>
          <div className="col currentTemp">
            <p>{Math.round(props.data.temperature)}° <span>C </span>| F</p>
          </div>
        </div>
      </div>
    );
}

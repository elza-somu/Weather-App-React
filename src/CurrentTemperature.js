import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import "./CurrentTemperature.css";
import axios from 'axios'

export default function CurrentTemperature(props) {
  const[apiData, setApiData] = useState({ready:false});
  function handleResponse(response) {
    
    console.log(response.data)
    setApiData({
      ready :true,
      temperature : response.data.main.temp,
      realFeel: response.data.main.feels_like,
      city : response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon:"dfsd"
    });
  }
  if (apiData.ready){
    
    return (
      <div className="CurrentTemperature">
        <div className="row">
          <div class="col">
            <h2>{apiData.city}</h2>
            <p>{apiData.icon}</p>
          </div>
          <div className="col-12 ">
            <h3>
              <FormattedDate date = {apiData.date} />
            </h3>
          </div>
        </div>
  
        <div className="row">
          <div className="col-3 timeDate">
            <h3>10:10pm</h3>
            <p className="text-capitalize">{apiData.description} </p> 
            <p>Real Feel {Math.round(apiData.realFeel)}° C</p>
          </div>
          <div className="col-6"></div>
          <div className="col currentTemp">
            <p>{Math.round(apiData.temperature)}° <span>C </span>| F</p>
          </div>
        </div>
      </div>
    );
  } else{
    const apiKey = "c859cc5005db2af23ee315e1d40f88f0"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading . . ."
  }
}

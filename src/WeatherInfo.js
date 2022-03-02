import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormattedDate from "./FormattedDate.js";
import Icons from "./Icons.js"
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return(
        <div className="container">
        <h1 className="text-capitalize">{props.data.cityName}</h1><h2>{props.data.country}</h2>
        <ul className="details">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul> 
        <div className="row">
          <div className="col-6">
            <div className="d-flex icon">
              <Icons data={props.data.icon} size={90}/>
              <span>
                <WeatherTemperature  temp={props.data.temperature}/>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul className="detailsMore">
              <li>Humidity: {props.data.humi}%</li>
              <li>Wind Speed: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        </div>)
        }
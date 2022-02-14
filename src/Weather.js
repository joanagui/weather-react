import React from "react";
//import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    city: "Lisboa",
    date: "Monday 14 Feb",
    decription: "Sunny",
    humi: "40%",
    wind: "20",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temp: "19"
  };
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      <h1>{WeatherData.city}</h1>
      <ul className="details">
        <li>Last updated: {WeatherData.date}</li>
        <li>{WeatherData.decription}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img src={WeatherData.imgUrl} alt="" />
            <span>
              <span>{WeatherData.temp}</span>
              <span>
                <a href="o">°C</a>
              </span>
              <span>
                <a href="o">|°F</a>
              </span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="detailsMore">
            <li>Humidity: {WeatherData.humi}</li>
            <li>Wind Speed: {WeatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div></div>
      <small>
        <a href="https://github.com/joanagui/weather-react">Open-source code</a>,
        Joana
      </small>
    </div>
  );
}
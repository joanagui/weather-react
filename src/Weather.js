import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";


export default function Weather(props) {
  let [city, setCity]=useState(props.defaultCity)
  let [ready, setReady]=useState(false)
  let [weatherData, setweatherData]=useState({})
  
  function displayWeather(response){
    setweatherData({
        temperature: response.data.main.temp,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        humi: response.data.main.humidity,
        wind: response.data.wind.speed,
        imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    setReady(true);
    console.log(response.data);
  }

  function search(){
    let key ="17e7458113b38b3d9ab8a6cbf84a6119";
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);

  }

  function submitCity(event){
    event.preventDefautlt();
    alert ("aknxcsc")
    search();
    
}
  function cityValue(event){
    setCity(event.target.value)
    
  }
  
  if (ready){
   return(
      <div className="weather container">
      <form onSubmit={submitCity}>
        <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
              onChange={cityValue}
            />
          </div>
          <div className="col-sm-3 ">
            <input type="submit" value="Search" className="btn btn-secondary"  />
          </div>
        </div>
        </div>
      </form>
      <h1>{city}</h1>
      <ul className="details">
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li>{weatherData.description}</li>
      </ul> 
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img src={weatherData.imgUrl} alt="icon weather" />
            <span>
              <span className="numberTemp">{Math.round(weatherData.temperature)}</span>
              <span className="celsiusFarh">
                <a href="o">°C</a>
              </span>
              <span className="celsiusFarh">
                <a href="o">|°F</a>
              </span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="detailsMore">
            <li>Humidity: {weatherData.humi}</li>
            <li>Wind Speed: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div></div>
      <small>
        <a href="https://github.com/joanagui/weather-react">Open-source code</a>,
        Joana
      </small>
    </div>
   )} else { 
    search();
     return (<p>Loading...</p>)
   }
}
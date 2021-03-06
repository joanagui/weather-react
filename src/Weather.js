import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"




export default function Weather(props) {
  let [queryCity, setQueryCity]=useState(null)
  let [ready, setReady]=useState(false)
  let [weatherData, setweatherData]=useState({})

  useEffect(() => {
    setQueryCity(props.defaultCity)
  }, [props.defaultCity])
  
  function displayWeather(response){
    setweatherData({
        cityName: queryCity,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        humi: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        lat: response.data.coord.lat,
        lon: response.data.coord.lon
      });
    setReady(true);
    console.log(response.data);
    
  }

  function submitCity(event){
    event.preventDefault();
    search();
    
   }
  function cityValue(event){
    setQueryCity(event.target.value)
    
  }

  function search(){
    console.log('searching: ', queryCity)
    if (queryCity && weatherData.cityName !== queryCity) {
      let key = '258655b39b951c09692d8e288bcfc34e';
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${key}&units=metric`;
      axios.get(url).then((response) => {displayWeather(response)});
    }
    
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
      <WeatherInfo data={weatherData}/>
      <WeatherForecast data={weatherData}/>
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
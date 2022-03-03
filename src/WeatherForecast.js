import React,{useState,useEffect} from "react";
import Icons from "./Icons";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState([{},{},{},{},{},{}])
    
    useEffect(() => {
        searchWeek()
    }, [props.data])
    
    function handleResponse(response){

        setLoaded(true);
        let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let newForecast = []

        for (let dayIndex of [0,1,2,3,4,5]) {
            let date = new Date(response.data.daily[dayIndex].dt * 1000)
            let weekDay = days[date.getDay()]
            console.log(weekDay)
            let weekDayForecast = {
                day: weekDay,
                lat: props.data.lat,
                lon: props.data.lon,
                icon: response.data.daily[dayIndex].weather[0].icon,
                Tmax: response.data.daily[dayIndex].temp.max,
                Tmin: response.data.daily[dayIndex].temp.min,
                date: date,
            }
            newForecast.push(weekDayForecast)
            
        }
        setForecast(newForecast);
        
        console.log(response.data);
        
        
      
    }

    function searchWeek() {
        let lat = props.data.lat;
        let lon = props.data.lon;
        
        let key = '258655b39b951c09692d8e288bcfc34e';
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&units=metric`
    
        axios.get(apiUrl).then(handleResponse)
    }

    if (loaded) {
        return(
         <div className="WeatherForecast">
        <div className="row">
        <div className="col">
          <div className="week">{forecast[1].day}</div>
          <Icons  data={forecast[1].icon} size="40"/>
          <div className="tempWeek">
              <span className="tempWeek-max">{Math.round(forecast[1].Tmax)}</span> 
              <span className="tempWeek-min">{Math.round(forecast[1].Tmin)}</span>
              </div>
        </div>
        <div className="col">
          <div className="week">{forecast[2].day}</div>
          <Icons data={forecast[2].icon} size="40" />
          <div className="tempWeek">
              <span className="tempWeek-max">{Math.round(forecast[2].Tmax)}</span> 
              <span className="tempWeek-min">{Math.round(forecast[2].Tmin)}</span></div>
        </div>
        <div className="col">
          <div className="week">{forecast[3].day}</div>
          <Icons data={forecast[3].icon}size="40" />
          <div className="tempWeek">
              <span className="tempWeek-max">{Math.round(forecast[3].Tmax)}</span> 
              <span className="tempWeek-min">{Math.round(forecast[3].Tmin)}</span></div>
        </div>
        <div className="col">
          <div className="week">{forecast[4].day}</div>
          <Icons data={forecast[4].icon} size="40" />
          <div className="tempWeek">
              <span className="tempWeek-max">{Math.round(forecast[4].Tmax)}</span> 
              <span className="tempWeek-min">{Math.round(forecast[4].Tmin)}</span></div>
        </div>
        <div className="col">
          <div className="week">{forecast[5].day}</div>
          <Icons data={forecast[5].icon} size="40"/>
          <div className="tempWeek">
              <span className="tempWeek-max">{Math.round(forecast[5].Tmax)}</span> 
              <span className="tempWeek-min">{Math.round(forecast[5].Tmin)}</span></div>
        </div>
        </div>
    </div>)
    } else {
        return ( "loading")
}}
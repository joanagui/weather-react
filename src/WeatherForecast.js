import React,{useState} from "react";
import Icons from "./Icons";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null)
    let [day,setDay] = useState("thu")
    
    
    
    function handleResponse(response){
        
        let dayIndex = 1
        let date = new Date(response.data.daily[dayIndex].dt * 1000)
        setForecast({
            icon: response.data.daily[dayIndex].weather[0].icon,
            Tmax: response.data.daily[dayIndex].temp.max,
            Tmin: response.data.daily[dayIndex].temp.min,
            date: date,
        });
        setLoaded(true);
        
        console.log(response.data);
        
        let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let weekDay = days[date.getDay()]
        
        console.log(weekDay)
        setDay(weekDay)
        
      
    }

    if (loaded) {
        return(
         <div className="WeatherForecast">
        <div className="row">
        <div className="col">
          <div className="week">{day}</div>
          <Icons  data={forecast.icon} size="40"/>
          <div className="tempWeek">
              <span className="tempWeek-max">{Math.round(forecast.Tmax)}</span> 
              <span className="tempWeek-min">{Math.round(forecast.Tmin)}</span>
              </div>
        </div>
        <div className="col">
          <div className="week">thu</div>
          <Icons data="02d" size="40" />
          <div className="tempWeek">
              <span className="tempWeek-max">19</span> 
              <span className="tempWeek-min">10</span></div>
        </div>
        <div className="col">
          <div className="week">thu</div>
          <Icons data="03d"size="40" />
          <div className="tempWeek">
              <span className="tempWeek-max">19</span> 
              <span className="tempWeek-min">10</span></div>
        </div>
        <div className="col">
          <div className="week">thu</div>
          <Icons data="01d"size="40" />
          <div className="tempWeek">
              <span className="tempWeek-max">19</span> 
              <span className="tempWeek-min">10</span></div>
        </div>
        <div className="col">
          <div className="week">thu</div>
          <Icons data="01d" size="40"/>
          <div className="tempWeek">
              <span className="tempWeek-max">19</span> 
              <span className="tempWeek-min">10</span></div>
        </div>
        </div>
    </div>)
    } else {
         let lat= props.data.lat;
         let lon= props.data.lon;
         let key = '258655b39b951c09692d8e288bcfc34e';
         let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&units=metric`
    
    axios.get(apiUrl).then(handleResponse)
    return ( "loading")
}}
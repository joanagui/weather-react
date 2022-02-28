import React, {useEffect, useState} from "react";


export default function WeatherTemperature(props){
let[actualTemp,setActualTemp]=useState(props.temp)


useEffect(() => {
    setActualTemp(props.temp)
}
, [props.temp])

function farhTemp(event){
event.preventDefault();
setActualTemp((props.temp * 1.8) + 32);

}

function celTemp(event){
event.preventDefault();
setActualTemp(props.temp)
}


return(
    <div>
    <span className="numberTemp">{Math.round(actualTemp)}</span>
    <span className="celsiusFarh">
    <a href="o" onClick={celTemp} className="cel">°C</a>
    </span>
    <span className="celsiusFarh">
    <a href="o" onClick={farhTemp} className="farh">|°F</a>
    </span>
    </div>
)
}
import React, {useState} from "react";


export default function WeatherTemperature(props){
let [active, setActive] = useState('cel');

function farhTemp(event){
event.preventDefault();
setActive('farh')

}

function celTemp(event){
event.preventDefault();
setActive('cel')
}

function calcTemp(temp) {
    if (active === 'cel') {
        return temp
    } else {
        return (temp * 1.8) + 32
    }
}

function checkActive(tempType) {
    let classes = `${tempType} apointer`
    if (tempType === active) {
        classes = `${classes} tempactive`
    } 
    return classes
    
}


return(
    <div>
    <span className="numberTemp">{Math.round(calcTemp(props.temp))}</span>
    <span className="celsiusFarh">
    <span onClick={celTemp} className={checkActive('cel')}>°C</span>
    </span>
    <span className="celsiusFarh">
    <span> | </span>
    <span onClick={farhTemp} className={checkActive('farh')}>°F</span>
    </span>
    </div>
)
}
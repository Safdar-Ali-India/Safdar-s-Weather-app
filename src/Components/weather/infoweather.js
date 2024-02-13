import React, { useState,useEffect } from 'react'

const Infoweather = ({temperInfo}) => {
const [weatherState, setWeatherState] = useState("");
const{temp,
    humidity,
    pressure,
    weatherone,
    name,
    speed,
    country,
    sunset} = temperInfo; 
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleString());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    useEffect(() => {
      if (weatherone){

        switch(weatherone){
case "Haze":setWeatherState("wi-day-cloudy")
    break;
       
case "Clouds":setWeatherState("wi-day-fog")
    break;
        
case "Clear":setWeatherState("wi-day-sunny")
    break;
        
case "Mist":setWeatherState("wi-day-dust")
    break;
default:
    setWeatherState("wi-day-sunny");
    break;
        }
      }
    }, [weatherone]);
    
// converting seconds into time
let sec = sunset;
let date = new Date(sec*1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
    {/* Our Temperature Card */}

<article className='widget'>
<div className="weatherIcon">
<i className={`wi ${weatherState}`}>
</i>

</div>
<div className="weatherInfo">
<div className="temperature">
<span> {temp} &deg; </span>
</div>
<div className="description">
<div className="weatherCondition">
{weatherone}
</div>
<div className="place">
{name}, {country}

</div>

</div>
</div>

<div className="date">
{currentTime}

</div>

{/* our 4 column section */}
<div className="extra-temp">

<div className="temp-info-minmax">
<div className="two-sided-section">
    <p><i className={"wi wi-sunset"}></i></p>
 <p className="extra-info-leftside">
    {timeStr} PM <br />

Sunset
 </p>
</div>
<div className="two-sided-section">
    <p><i className={"wi wi-humidity"}></i></p>
 <p className="extra-info-leftside">
    {humidity} PM <br />

    Humidity
 </p>
</div>
</div>
 <div className="weather-extra-info">

 <div className="two-sided-section">
    <p><i className={"wi wi-rain"}></i></p>
 <p className="extra-info-leftside">
    {pressure} PM <br />

  Pressure
 </p>
</div>
<div className="two-sided-section">
    <p><i className={"wi wi-strong-wind"}></i></p>
 <p className="extra-info-leftside">
    {speed} PM <br />

Speed
 </p>
</div>
 </div>


</div>


</article>
    </>
  )
}

export default Infoweather
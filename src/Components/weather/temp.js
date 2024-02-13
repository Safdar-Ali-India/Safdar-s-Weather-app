// https://api.openweathermap.org/data/2.5/weather?q=jamshedpur&appid=95676669b72c5f7f6ab64574787f9fd6

import React, { useState, useEffect } from 'react';
import "./style.css";
const Temp = () => {

const [searchValue, setSearchValue] = useState("Jamshedpur");
const [temperInfo, setTempInfo] = useState({});


const getWeatherInfo = async ()=>{

try {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=95676669b72c5f7f6ab64574787f9fd6`

const res = await fetch(url);
const data = await res.json();
const {temp, humidity, pressure} =data.main;
const {main:weatherone}=data.weather[0];
const {name} = data;
const {speed}=data.wind;
const {country,sunset} = data.sys;
console.log(temp, humidity, pressure);

const newweatherinfo ={
    temp,
     humidity,
     pressure,
     weatherone,
     name,
     speed,
     country,
     sunset
}
setTempInfo(newweatherinfo);

} catch (error) {
    console.log(error);
}

}

useEffect(() => {
    getWeatherInfo();

}, [])





  return (
    <>
    <div className="wrap">
<div className="search">
<input type="search" placeholder="Search City..." autoFocus id='search' className='searchTerm' 
value = {searchValue}

onChange={(e) => setSearchValue(e.target.value)}/>


<button className='searchButton' type='button' onClick={getWeatherInfo}>

Search

</button>
</div>
 </div>

    
    </>
  )
}

export default Temp
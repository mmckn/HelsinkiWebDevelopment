

import React from 'react'

const Weather = ({changeWeather, weather, country}) =>{

//onClick runs the changeWeather method passing the country as a parameter which updates the param state causing a new call
//to the weather API


        if(weather != null){
        return(
            <div>
      
        <button type="submit" onClick={() => changeWeather(country)}> Update weather </button>
    <h3>Weather in {weather.location.name}</h3>
        <p>temperature: {weather.current.temperature}C</p>
        <img alt={weather.current.weather_descriptions[0]} src={weather.current.weather_icons[0]} />
    </div>
        )
    }
    else{
        return(
            <button type="submit" onClick={() => changeWeather(country)}> Get weather </button>
        )
    }
    }





export default Weather
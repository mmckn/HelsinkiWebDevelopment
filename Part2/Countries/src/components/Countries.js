import React from 'react'

import Country from './Country'
import Weather from './Weather'

//displays list of countries passed to it.
const Countries = ({  weather, changeWeather, list, searchString, handleSearchChange}) =>
{

  
  if(list.length > 10){
      return(
          <div>
        <input   value = {searchString}  onChange={handleSearchChange} />
          <p> Enter country name</p>
          </div>
      )
  }
  
  else if(list.length > 1){
      return(
          <div>
    <input   value = {searchString}  onChange={handleSearchChange} />

    {list.map(number => <div> <Country key={number.numericCode} name ={number.name}  />   
   
        </div>
    ) }
    </div>
 )
}

else if (list.length === 1){
    return(
        <div>
        <input   value = {searchString}  onChange={handleSearchChange} />
    <Country key={list[0].numericCode} name ={list[0].name} /> 

        <img alt="country flag" src ={list[0].flag} />

        <h2>Languages spoken</h2>
        {list[0].languages.map(language => <p>{language.name}</p>)}
       

        <h2>Weather</h2>
        <Weather  key={list[0].numericCode +'weather'}  changeWeather={changeWeather} country={list[0].name} weather ={weather} />

</div>
        
    )
}

else{
    return(
        <div>
        <input   value = {searchString}  onChange={handleSearchChange} />
        <p>no matches</p>
        </div>
    )
}
}

export default Countries
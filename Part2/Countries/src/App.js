
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Countries from './components/Countries'





const App = () => {
const [countries, setCountries] = useState([])
const [searchString, setNewSearch] = useState('')
const [weather, setWeather] = useState(null)
const [params, setParams]=useState({access_key: null,
query: null})


//filter the countries list, if nothing is entered return all countries
let searchResults = countries.filter(number => number.name.includes(searchString))


//cause a new call to the weather api for the passed in country as params.query is changed
const changeWeather = (country) =>{
  setParams({access_key: 'a6a43b2edc59a0bf360a2107a7e70bbf' ,
  query: country })

  }



const handleSearchChange = (event) =>
{

setNewSearch(event.target.value)

}

useEffect(() => {
  if(searchResults.length === 1){
    
    //get new weather data from API when params.query is changed
  Axios
  .get('http://api.weatherstack.com/current', {params})
  .then(response => {
    console.log(response.data)
      setWeather(response.data)
  }).catch(error =>{
    console.log(error)
  })
}

}, [params.query])



//get all countries from api and assign to countries state
useEffect(() => {
  Axios
  .get('https://restcountries.eu/rest/v2/all')
  .then(response => {
      setCountries(response.data)
  }).catch(error => {
    console.log(error)
  })

}, [])





  return (

    <div> <h1>Enter a country</h1>

    <Countries weather ={weather} changeWeather={changeWeather} list ={searchResults} searchString={searchString} handleSearchChange={handleSearchChange} />

    </div>
  )
}

export default App;

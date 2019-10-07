import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({country}) => {

    const [weather, setWeather] = useState([])
    console.log(country.capital)

    
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=`)
    .then(response => {
      setWeather(response.data)
    })
    
  

   console.log('sää')
  console.log({weather})

    return (
        <div>
        <h1>{country.name}</h1>
    <p>Capital {country.capital} </p>
    <p>Population {country.population}</p>
    <h2>Languages</h2>
    <p>{country.languages.map(c => <li key = {c.name}> {c.name}</li>)}</p>
    <img src={country.flag} alt = 'img' width='260'></img>
    <h2>Weather in {country.name}</h2>
    <p>Temperature </p>
    <img></img>
    
    <p><b>Temperature: </b>{weather.wind.map(speed => <p key = {speed.speed}> {speed.speed}</p> )} Celsius</p>
      <img src={weather.icon} alt="icon" width="200"/>
    </div>
    )
}

export default Country
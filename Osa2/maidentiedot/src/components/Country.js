import React, { useState, useEffect } from 'react'


const Country = ({ country, weather }) => {


  console.log(country.capital)

  console.log('sää')
  console.log({ weather })

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital {country.capital} </p>
      <p>Population {country.population}</p>
      <h2>Languages</h2>
      <p>{country.languages.map(c => <li key={c.name}> {c.name}</li>)}</p>
      <img src={country.flag} alt='img' width='260'></img>
      <h2>Weather in {country.name}</h2>

      <p><b>Temperature: </b> {weather.current.temperature} Celsius</p>
      <p><b>Wind: </b> {weather.current.wind_speed} </p>
      <img src={weather.current.weather_icons} alt="icon" width="200" />
    </div>
  )
}

export default Country
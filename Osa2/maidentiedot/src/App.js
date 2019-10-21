
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './components/List'


const App = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)

      })

  }, [])

  return (

    <div>

      <List countries={countries} />

    </div>

  )
}

export default App
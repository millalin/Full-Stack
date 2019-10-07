import React from 'react'

const filterCountries = (countries, show) => {

    if ((countries.filter(country => country.name.includes(show))).length >10) {
        
        return 'x'
        
     } else {
            return countries.filter(country => country.name.includes(show))
            
        }
    }
    
 export default filterCountries
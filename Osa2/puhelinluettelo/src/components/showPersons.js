import React from 'react'

 const showPersons = (showAll, persons, show) => { 
 
    if (showAll === false ){
        return persons.filter(person => person.name.includes(show))
      } else {
        return persons
      }

 }
 export default showPersons
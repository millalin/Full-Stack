import React, { useState, useEffect } from 'react'
import personAlreadyInList from './components/personAlreadyInList'
import showPersons from './components/showPersons'
import Person from './components/Person'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [pid, setId] = useState('')

  useEffect(() => {

    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })

  }, [])


  const addPerson = (event) => {

    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (personAlreadyInList(persons, newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {

      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }



  const handleNameAdding = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberAdding = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setShow(event.target.value)
    if (event.target.value === '') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }

  }

  const handleClick = (person) => {

    //deletePerson(person.id)
    console.log('id' + person.id)

    if (window.confirm(`Delete ${person.name} ?`)) {

      personService
        .del(person.id)
        .then(response => {
          setPersons(persons.concat(response.data))
          setShow('')
          setShowAll(true)
        })

    }
  }



  const list = () => (showPersons(showAll, persons, show)).map(person => <Person person={person} clickhandler={handleClick} />
  )


  return (
    <div>
      <h2>Phonebook</h2>


      <div>
        <form>
          Filter shown with <input value={show}
            onChange={handleFilter} /> </form>

      </div>

      <div>
        <h3>Add new</h3>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName}
              onChange={handleNameAdding} /> </div>
          <div>number: <input value={newNumber}
            onChange={handleNumberAdding} /></div>

          <button type="submit">add</button>
        </form>
      </div>

      <h2>Numbers</h2>


      <form >
        <div>

          {(showPersons(showAll, persons, show)).map(person => <Person key={person.id} person={person} clickhandler={handleClick} />
          )}


        </div>
      </form>


    </div>
  )

}


export default App


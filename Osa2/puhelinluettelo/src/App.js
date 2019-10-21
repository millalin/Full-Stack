import React, { useState, useEffect } from 'react'
import personAlreadyInList from './components/personAlreadyInList'
import showPersons from './components/showPersons'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const Notification = ({ message }) => {
    if (message === '') {
      return null
    }

    return (
      <div className="error">
        {message}
      </div>
    )
  }
  const Notification2 = ({ message }) => {
    if (message === '') {
      return null
    }

    return (
      <div className="success">
        {message}
      </div>
    )
  }

  useEffect(() => {

    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })

  }, [])

  const setInfo = (text) => {
    setMessage(text)
    setTimeout(() => {
      setMessage('')
    }, 5000);
  }

  const setErrorInfo = (text) => {
    setErrorMessage(text)
    setTimeout(() => {
      setErrorMessage('')
    }, 5000);
  }

  const addPerson = (event) => {

    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (personAlreadyInList(persons, newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number?`)) {
        const p = persons.filter(p => p.name === newName)[0]
        personObject.id = p.id
        personService
          .update(personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== persons.id ? person : response.data))
            setInfo(`${personObject.name} changed.`)
          })

          .catch(error => {
            setPersons(persons.filter(person => person.id !== personObject.id))

            setErrorInfo(`Person ${personObject.name} is already removed from database.`)
          })
      }
      setNewName('')
      setNewNumber('')

    } else {

      personService
        .create(personObject)

        .then(response => {
          setPersons(persons.concat(response.data))

          setInfo(`Created ${personObject.name}`)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {

          setErrorInfo('Name must be 3 chars and number atleast 8')
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

    if (window.confirm(`Delete ${person.name} ?`)) {

      personService
        .del(person.id)
        .then(response => {
          setPersons(persons.concat(response.data))
          setShow('')
          setShowAll(true)
        })

      setInfo(`Deleted ${person.name}`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} />
      <Notification2 message={message} />
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


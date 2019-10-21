
const personAlreadyInList = (persons, newName) => (
    (persons.map(person => person.name).includes(newName))
  )

  export default personAlreadyInList
import React from 'react'

const handleClick = (person) => {
    console.log(person.name)
    


}

const Person = ({person, clickhandler}) => {
    return (
        <ul key={person.id}> {person.name} {person.number}
        <button onClick={() => clickhandler(person)}>Delete</button>
        </ul>
)}

export default Person
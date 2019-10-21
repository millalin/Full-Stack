import React from 'react'



const Person = ({person, clickhandler}) => {
    return (
        <ul key={person.id}> {person.name} {person.number}
        <button onClick={() => clickhandler(person)}>Delete</button>
        </ul>
)}

export default Person
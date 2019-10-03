import React from 'react'

const Person = ({person}) => {
    return (
        <ul key={person.id}> {person.name} {person.number}</ul>
)}

export default Person
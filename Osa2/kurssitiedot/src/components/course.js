import React from 'react'



const Header = props =>
    <h1>{props.course}</h1>


const Total = ({ parts }) => {
    return (
        <div>
            Total of {parts.reduce((total, part) => (
                total + part.exercises), 0)} exercises
        </div>
    )
}

const Part = props =>
    props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)



const Course = ({ course }) => (

    <div> <Header course={course.name} />
        <Content parts={course.parts} />
    </div>
)

const Content = props => (
    <div>
        <Part parts={props.parts} />
        <Total parts={props.parts} />
    </div>
)

export default Course
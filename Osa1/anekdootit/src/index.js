import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const generateRandom = (props) => {
    return Math.floor(Math.random() * 6);
    
}

const mostPoints = (points) => {
    //käydään taulukko läpi kenellä on eniten ääniä
    
    let biggest = -1;
    let mostVoted = -1;
    for (let i = 0; i<anecdotes.length; i++)    {
        if (points[i] > biggest) {
            biggest = points[i] 
            mostVoted = i
        } 
    }
    return mostVoted
}


const App = (props) => {
    const length = anecdotes.length
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(length).fill(0))
    const [mostVotes, setMostVotes] = useState(0)

    const addPoints = (selected) => () => {
        const pointchart = { ...points }
        pointchart[selected] += 1
        setPoints(pointchart)
        setMostVotes(mostPoints(pointchart))
    }

    console.log(selected);
    console.log(points[selected])
    return (
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                <p>{props.anecdotes[selected]}</p>
                <p>Has {points[selected]} votes</p>

                <Button handleClick={addPoints(selected)} text="Vote" />

                <Button handleClick={() => setSelected(generateRandom)} text="Next anecdote" />

            </div>
            <div>
                <h1>Anecdote with most votes</h1>

                <p>{anecdotes[mostVotes]}</p>
                <p>Has {points[mostVotes]} votes</p>
            </div>
        </div>
    )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
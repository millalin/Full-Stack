import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    //tilastojen näyttäminen
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const all = props.good+props.bad+props.neutral

    if (all === 0) {
        return (
            <div> 
                <h1>Statistics</h1><table><tbody>
                
                <Statistic text = "no feedback given"/>
                </tbody></table>
            </div>
        )
    }
    return (
        <div>
             <h1>Statistics</h1>
             <table><tbody>
             <Statistic text = "Good" value ={good}/>
             <Statistic text = "Neutral" value ={neutral}/>
             <Statistic text = "Bad" value ={bad}/>
             <Statistic text = "All" value ={all}/>
             <Statistic text = "Average" value ={(good*1+bad*-1)/all}/>
             <Statistic text = "Positive" value ={good/all}/>
             </tbody></table>
        </div>
    )
}

const Statistic = (props) => (
    <tr>
    <td>{props.text} </td>
    <td>{props.value}</td>
    </tr>
)

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood (good +1)} text = "good" />
      <Button handleClick={() => setNeutral (neutral +1)} text = "neutral" />
      <Button handleClick={() => setBad (bad +1)} text = "bad" />
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

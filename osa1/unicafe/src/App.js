import React, {useState} from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
)}

// buttons: good = +1, neutral = 0, bad = -1
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allClicks = 0

  //calculates average mumber from given feedback
  const calcAverage = () => {
    return (
      (good+bad+neutral)/ allClicks
    )
  } 
  
  //claculates % of positive feedback from overall feedbacks
  const calcPositive = () => {
    return (
      (good / allClicks) * 100
    )
  }

  return (
    <div>
        <h1>give us feedback</h1>
        <Button handleClick={ () => { setGood(good+1)}} text='good'/>
        <Button handleClick={ () => { setNeutral(neutral+1)}} text='neutral'/>
        <Button handleClick={ () => { setBad(bad+1)}} text='bad'/>
        <h1>statistics</h1>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br />
        average {calcAverage} <br/>
        positive {calcPositive} <br/>
    </div>
  )
}

export default App
import React, {useState} from 'react'

const Button = (props) => {
    <button onClick={props.handleClick}>props.name</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const pressed = 0
  const positivePressed = 0


  const calcAverage = () => {
    return (
      (good+bad)/pressed
    )
  } 
  
  const calcPositive = () => {
    
  }

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={ () => return ( setGood(good+1); pressed++; positivePressed++)} text='good'/>
        <Button handleClick={ () => return (setNeutral(neutral+1); pressed++;)}text='neutral'/>
        <Button handleClick={ () => return (setBad(bad+1); pressed++;)} text='bad'/>
        <h1>statistics</h1>
        good {good}
        neutral {neutral}
        bad {bad}
        average {calcAverage}
        positive {calcPositive}
    </div>
  )
}

export default App
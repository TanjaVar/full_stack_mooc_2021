import React, {useState} from 'react'

const Button = (props) => {
  return (
      <>
        <button onClick={props.handleClick}>{props.text}</button>
      </>
    )
}

const CalculateAverage = (props) => {
  const average = (props.good + props.bad)/props.pressed
  return (
    <div>
      Average {average}
    </div>
  )
}

const CalculatePositive = (props) => {
  const positive = (props.good/props.pressed)*100
  return (
    <div>
      Positive {positive} %
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [pressed, setPressed] = useState(0)

  return (
    <div>
        <h1>Give us feedback</h1>
        <Button handleClick={ () => { setGood(good+1); setPressed(pressed+1);}} text='good'/>
        <Button handleClick={ () => { setNeutral(neutral+1); setPressed(pressed+1);}} text='neutral'/>
        <Button handleClick={ () => { setBad(bad+1); setPressed(pressed+1);}}text='bad'/>
        <h1>statistics</h1>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        <CalculateAverage pressed={pressed} good={good} bad={bad} neutral={neutral}/>
        <CalculatePositive pressed={pressed} good={good} />
    </div>
  )
}

export default App
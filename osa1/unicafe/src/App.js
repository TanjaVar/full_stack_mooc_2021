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

//renders each statistic line separately...
//unicafe 1.10 step 5
const StatisticsLine = (props) => {
  if (props.text === 'good' || props.text === 'bad' || props.text === 'neutral') {
    return (
      <div>
        {props.text} {props.value}
      </div>
    )
  } else if (props.text === 'average') {
    return (
      <div>
        {props.text} {props.calc}
      </div>
    )
  } else if (props.text === 'positive') {
    return (
      <div>
        {props.text} {props.calc}
      </div>
    )
  } else {
    return (
      <div>
        <p>Error</p>
      </div>
    )
  }
}

// 1.8 unicafe step 3
// includes all functions which return statistics of the feedback application
const Statistics = (props) => {
  if (props.pressed > 0) {
    return (
      <div>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        <CalculateAverage pressed={props.pressed} good={props.good} bad={props.bad} neutral={props.neutral}/>
        <CalculatePositive pressed={props.pressed} good={props.good} /> 
      </div>
    )
  } else {
    return (
      <div>
        feeback not given
      </div>
    )
  }
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
        <Statistics pressed={pressed} good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App
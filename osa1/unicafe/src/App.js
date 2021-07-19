import React, {useState} from 'react'

const Button = (props) => {
  return (
      <>
        <button onClick={props.handleClick}>{props.text}</button>
      </>
    )
}


//renders each statistic line separately...
//unicafe 1.10 step 5
const StatisticsLine = (props) => {
    if (props.text === 'good') { 
      //console.log('good', props.good)
      return (
        <div>
          {props.text} {props.good}
        </div>
      )
    } else if (props.text === 'bad') {
      return (
        <div>
          {props.text} {props.bad}
        </div>
      )
    } else if (props.text === 'neutral') {
      return (
        <div>
        {props.text} {props.neutral}
        </div>
      )
    }
    //calculating average and positive value prosentage
    if (props.text === 'average') {
      const calc = (props.good + props.bad)/props.pressed
      return (
        <div>
          {props.text} {calc}
        </div>
      )
    } else if (props.text === 'positive') {
      const positive = (props.good/props.pressed)*100
      return (
        <div>
          {props.text} {positive}%
        </div>
      )
    }
    return (
      <div>
        <p>Error</p>
      </div>
    )
  }

// 1.8 unicafe step 3
// includes all functions which return statistics of the feedback application
const Statistics = (props) => {
    //console.log('working', props.pressed)
    if (props.pressed > 0) {
      return (
        <div>
          <StatisticsLine text='good' pressed={props.pressed} good={props.good} bad={props.bad} neutral={props.neutral} />
          <StatisticsLine text='neutral' pressed={props.pressed} good={props.good} bad={props.bad} neutral={props.neutral}/>
          <StatisticsLine text='bad' pressed={props.pressed} good={props.good} bad={props.bad} neutral={props.neutral} />
          <StatisticsLine text='average' pressed={props.pressed} good={props.good} bad={props.bad} neutral={props.neutral}/>
          <StatisticsLine text='positive' pressed={props.pressed} good={props.good} bad={props.bad} neutral={props.neutral}/>
        </div>
      )
    }
    return (
      <div>
        feedback not given
      </div>
    )
  }


//root component
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
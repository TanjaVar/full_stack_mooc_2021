import React, {useState} from 'react'

const Button = ({ handleClick, text}) => {
  return (
      <>
        <button onClick={handleClick}>{text}</button>
      </>
    )
}


//renders each statistic line separately...
//unicafe 1.10 step 5
const StatisticsLine = ({ text, pressed, good, bad, neutral }) => {
    if (text === 'good') { 
      //console.log('good', props.good)
      return (
        <div>
          {text} {good}
        </div>
      )
    } else if (text === 'bad') {
      return (
        <div>
          {text} {bad}
        </div>
      )
    } else if (text === 'neutral') {
      return (
        <div>
        {text} {neutral}
        </div>
      )
    }
    //calculating average and positive value percentage
    if (text === 'average') {
      const calcAverage = (good + bad)/pressed
      return (
        <div>
          {text} {calcAverage}
        </div>
      )
    } else if (text === 'positive') {
      const positivePercentage = (good/pressed)*100
      return (
        <div>
          {text} {positivePercentage}%
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
<<<<<<< HEAD
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
=======
const Statistics = ({ pressed, good, bad, neutral }) => {
    if (pressed > 0) {
      return (
        <div>
          <StatisticsLine text='good' pressed={pressed} good={good} bad={bad} neutral={neutral} />
          <StatisticsLine text='neutral' pressed={pressed} good={good} bad={bad} neutral={neutral}/>
          <StatisticsLine text='bad' pressed={pressed} good={good} bad={bad} neutral={neutral} />
          <StatisticsLine text='average' pressed={pressed} good={good} bad={bad} neutral={neutral}/>
          <StatisticsLine text='positive' pressed={pressed} good={good} bad={bad} neutral={neutral}/>
        </div>
      )
    }
>>>>>>> da555b59d5c4bc9ba2f52a4ac878ecdfa5822d99
    return (
      <div>
        feeback not given
      </div>
    )
  }
<<<<<<< HEAD
}

=======


//root component
>>>>>>> da555b59d5c4bc9ba2f52a4ac878ecdfa5822d99
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
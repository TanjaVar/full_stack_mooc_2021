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
        <>
          <td>{text}</td>
          <td>{good}</td>
        </>
      )
    } else if (text === 'bad') {
      return (
        <>
          <td>{text}</td>
          <td>{bad}</td>
        </>
      )
    } else if (text === 'neutral') {
      return (
        <>
          <td>{text}</td>
          <td>{neutral}</td>
        </>
      )
    } else if (text === "all") {
      return (
        <div>
          {text} {pressed}
        </div>
      )
    }
    //calculating average and positive value percentage
    if (text === 'average') {
      const calcAverage = (good + bad)/pressed
      return (
        <>
          <td>{text}</td>
          <td>{calcAverage}</td>
        </>
      )
    } else if (text === 'positive') {
      const positivePercentage = (good/pressed)*100
      return (
        <>
          <td>{text}</td>
          <td>{positivePercentage}%</td>
        </>
      )
    }

    return (
      <>
        <td>
          <p>Error</p>
        </td>
      </>
    )
  }

// 1.8 unicafe step 3
// includes all functions which return statistics of the feedback application
const Statistics = ({ pressed, good, bad, neutral }) => {
    if (pressed > 0) {
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                        <tr>
                          <StatisticsLine text='good' pressed={pressed} good={good} bad={bad} neutral={neutral} />
                        </tr>
                        <tr>
                          <StatisticsLine text='neutral' pressed={pressed} good={good} bad={bad} neutral={neutral}/>
                        </tr>
                        <tr>
                          <StatisticsLine text='bad' pressed={pressed} good={good} bad={bad} neutral={neutral} />
                        </tr>
                        <tr>
                          <StatisticsLine text='average' pressed={pressed} good={good} bad={bad} neutral={neutral}/>
                        </tr>
                        <tr>
                          <StatisticsLine text='positive' pressed={pressed} good={good} bad={bad} neutral={neutral}/> 
                        </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <div>
        feeback not given
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
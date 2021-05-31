import ReactDOM from 'react-dom'
import App from './App.js'

<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';


//renders header
const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

// renders course's parts and excersise quantity
const Part = (props) => {
  return (
    <p>{props[0].name} {props[1].exercises}</p>
  )
} 



// calls "Part" function
const Content = (props) => {
  return (
    <div>
      <Part p={props}/>
    </div>

  )
}

// renderöi tehtävien yhteismäärän
const Total = (props) => {
  return (
    <div>
      <p>Number of Exercises {props.amount}</p>
    </div>

  )
}

const App = () => {
  const course = 'Half Stack application development'

  //all data placed to an array
  const parts= [
    {
      name: 'Fundalmentals of react',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header courseName={course} />
      <Content p={parts} />
      <Total amount={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
=======
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
>>>>>>> 43c3166707d34eb03373aae18acb3a7d0d70afd1

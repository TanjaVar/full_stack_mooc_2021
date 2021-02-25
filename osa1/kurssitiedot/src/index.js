/* Refaktoroi sovelluksen koodi siten, että se 
koostuu kolmesta uudesta komponentista: Header,
 Content ja Total. Kaikki data pidetään edelleen
  komponentissa App, joka välittää tarpeelliset 
  tiedot kullekin komponentille props:ien avulla.
   Header huolehtii kurssin nimen renderöimisestä,
    Content osista ja niiden tehtävämääristä ja Total 
    tehtävien yhteismäärästä.*/

import React from 'react';
import ReactDOM from 'react-dom';

//Header huolehtii kurssin nimen renderöimisestä
const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

// renderöi osat ja tehtävämäärät
const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.ex}</p>
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
  // All data is stored in component 'App'
  const course = 'Half Stack application development'
  const part1 = 'fundalmentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content part={part1} ex={exercises1}/>
      <Content part={part2} ex={exercises2}/>
      <Content part={part3} ex={exercises3}/>
      <Total amount={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

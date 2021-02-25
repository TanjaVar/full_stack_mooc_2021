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

//1.2 kurssitiedot, step2
/*Refaktoroi vielä komponentti Content siten, että se ei itse renderöi 
yhdenkään osan nimeä eikä sen tehtävälukumäärää vaan ainoastaan 
kolme Part-nimistä komponenttia, joista kukin siis renderöi yhden 
osan nimen ja tehtävämäärän.*/
const Part = (props) => {
  return (
    <p>{props.part} {props.ex}</p>
  )
}

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
      <Part part={props.p1} ex={props.e1}/>
      <Part part={props.p2} ex={props.e2}/>
      <Part part={props.p3} ex={props.e3}/>
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
  const part1 = 'Fundalmentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total amount={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

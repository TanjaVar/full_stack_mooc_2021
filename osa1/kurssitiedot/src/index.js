
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

/* const Part = (props) => {
  const values = props.object
  const courses = values.map(value =>
    '<p>' + value + '</p>'
    )
  return (

  )
} */


const Content = (props) => {
  return (
    <div>
      <p> {props.p} {props.ex}</p>
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

  const part1 = {
    name: 'Fundalmentals of react',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header courseName={course} />
      <Content p={part1.name} ex={part1.exercises} />
      <Content p={part2.name} ex={part1.exercises} />
      <Content p={part3.name} ex={part1.exercises} />
      <Total amount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

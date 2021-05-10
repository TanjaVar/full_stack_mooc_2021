
import React from 'react';


//renders header
const Header = (props) => {
  console.log(props + 'eka') // check props type
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

// renders course's parts and excersise quantity
const Part = (props) => {
  console.log(props + 'kolmas') // check props type
  return (
    <>
      <p>{props.part} {props.ex}</p>
    </>

  )
} 

// calls "Part" function
const Content = (props) => { //props = parts
  console.log(props + 'toka') // check props type
  return (
    <>
      <Part part={props.c.name} ex={props.c.exercises}/> 
    </>
  )
}

// renders sum of courses
const Total = (props) => {
    console.log(props) // check props type
  return (
    <>
       <p>Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

// All data is stored in App component
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundalmentals of React', 
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
}


  return (
    <div>
      <Header courseName={course.name} />
      <Content c={course.parts[0]} />
      <Content c={course.parts[1]} />
      <Content c={course.parts[2]} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App

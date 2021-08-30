
import React from 'react';


//header
const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

//  course's parts and excersise quantity
const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.ex}</p>
    </>

  )
} 

// calls "Part" function
const Content = (props) => { //props = parts
  return (
    <>
      <Part part={props.courseParts.name} ex={props.courseParts.exercises}/> 
    </>
  )
}

// total exercises
const Total = (props) => {
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
      <Content courseParts={course.parts[0]} />
      <Content courseParts={course.parts[1]} />
      <Content courseParts={course.parts[2]} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App

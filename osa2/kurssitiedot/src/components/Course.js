import React from 'react';

const Header = (props) => {
    return (
        <>
            <h1>{props.courseHeader}</h1>
        </>
    )
};


const Content = (props) => {
    console.log("Content props:",props)
    return (
        <>  
            {props.courseContent.map(part => 
                <Part name={part.name} exercises={part.exercises} key={part.id}/>
            )}
        </>
    )
};

const Part = ({name, exercises }) => {
    console.log("PART:",  name)
    console.log("EERCISES:", exercises)
    return (
        <>
            <p> {name} {exercises}</p>
        </>
    )
};


//komponentti Course sisältää edellisessä osassa määritellyt komponentit, joiden vastuulle tulee kurssin nimen ja osien renderöinti.
const Course = ({ course }) => {
    console.log("WOLOLO", course) // undefined

    return (
        <>
            <Header courseHeader={course.name}/>
            <Content courseContent={course.parts}/>
        </>
    )
}

export default Course;
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

//sum of all exercises 
const Sum = (props) => {
	return (
		<p> Total of {props.totalExercises.reduce(function(sum, ex) {
			console.log("Weeee", sum, ex)
			return sum + ex.exercises
		}, 0)} exercises </p>
	)
}



//komponentti Course sisältää edellisessä osassa määritellyt komponentit, joiden vastuulle tulee kurssin nimen ja osien renderöinti.
const Course = ({ course }) => {
    console.log("WOLOLO", course) // undefined

    return (
        <>
            <Header courseHeader={course.name}/>
            <Content courseContent={course.parts}/>
						<Sum totalExercises={course.parts}/>
        </>
    )
}

export default Course;
import React from 'react';

const Header = (props) => {
    return (
        <>
            <h1>{props.courseHeader}</h1>
        </>
    )
};


const Content = (props) => {
    return (
        <>  
            {props.courseContent.map(part => 
                <Part name={part.name} exercises={part.exercises} key={part.id}/>
            )}
        </>
    )
};

const Part = ({name, exercises }) => {
    return (
        <>
            <p> {name} {exercises}</p>
        </>
    )
};

//sum of all exercises 
const Sum = (props) => {
	return (
		<p> 
			Total of {props.totalExercises.reduce(function(sum, ex) {
			return sum + ex.exercises
			}, 0)} exercises 
		</p>
	)
}

//Component Course contains components from previous exercise, which are responsible of course name and parts rendering
const Course = ({ course }) => {
    return (
        <>
					<Header courseHeader={course.name}/>
					<Content courseContent={course.parts}/>
					<Sum totalExercises={course.parts}/>
        </>
    )
}

export default Course;
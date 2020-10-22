
import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
  return (
    <div>
    <h1>{props.course}</h1>
    </div>

  )
}

const Content = (props) =>{
  
  return (
<div>
{props.parts.map((v, i) =><Part key= {i} part={v.name} exercise={v.exercises}/> )}

</div>
  )
}

const Total = (props) =>{
 
  return (
    
  <p>number of exercises {props.parts.reduce((accumulator, v) => accumulator +v.exercises, 0)}</p>
  )
}

const Part = (props) =>{
  console.log(props)
  return (
   <p>{props.part} {props.exercise}  </p>
  )
}
const App = () => {

  const course = {
  name : 'Half Stack application development',
parts : [
   {
    name: 'Fundamentals of React',
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
    <Header course={course.name} />

    <Content parts = {course.parts}/>
  
     <Total parts ={course.parts} />
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
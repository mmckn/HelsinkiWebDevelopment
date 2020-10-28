import React from 'react'



const Course =({course}) => {

return (
  
  <div>
  {course.map(course =>
    <div>
  <Header course={course.name} />

    <Content parts = {course.parts}/>
  
     <Total parts ={course.parts} />
     </div>
     )}
     </div>
)
}

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

export default Course
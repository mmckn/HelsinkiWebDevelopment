import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = (props) =>{

return (
  <button onClick={props.handleClick}>{props.type}</button>
)
}

const HighestVotes =({votes, anecdote}) => {
  // Displays the anecode with the highest vote
  if(votes > 0){
  return(
    <div>
    <h2>Highest Votes</h2>
    <p>"{anecdote}" - with {votes} votes</p>

    
     

    </div>
    
  )
  }
return(<p>no highest vote yet.</p>)
  
}
const App = (props) =>{
  //the 3 states we need: the currently selected anecdote the points object. and the quote with highest points.
  const [selected, setSelected] = useState(0)
  //points object matches the anecdote array
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0,4:0,5:0,6:0})

  const [mostPoints, setMostPoints] = useState()
  
  const setToSelected = () => {
     setSelected( (selected - selected) + Math.floor(Math.random() * 5) + 1)
  }

  const increaseScore = (selected) =>
{ // Increment current quotes score by 1, cannot mutate points directly so have to copy it
  const copy = {...points}
 
 copy[selected]++
 setPoints(copy)

  highestVotes(points)
}  

const highestVotes = (points) =>{

  // Returns the object key with the highest votes
 setMostPoints(Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b))
 

}

return (
  <div>
<Button handleClick={() => setToSelected()} type="new quote" />
<Button handleClick={()=> increaseScore(selected)} type="vote" />
  {props.anecdotes[selected]}
  <p>
  votes: {points[selected]}
  </p>
<HighestVotes votes = {points[mostPoints]} anecdote={anecdotes[mostPoints]} />
  </div>
)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
<App anecdotes={anecdotes}    />,
  document.getElementById('root')
)


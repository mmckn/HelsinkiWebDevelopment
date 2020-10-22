import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ handleClick, numberPressed }) => (
<button onClick={handleClick}>{numberPressed}</button>
)

const Statistics = ({ type, value }) => {
  
return (
  
  <div>
  
  <p>{type}: {value}</p>
   
   </div>
)
  }



const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const[total, setTotal] = useState(0)
 
  const setToGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const setToNeutral = () => {
    setNeutral( neutral + 1)
    setTotal(total + 1)
  }
  const setToBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
    <h1>Give feedback</h1>
   <Button handleClick={() => setToGood()}  numberPressed ="good" />
  
    <Button handleClick={() => setToNeutral()} numberPressed ="neutral" />

    <Button handleClick={() => setToBad()} numberPressed="bad" />
{total  ==  0 &&
  <h1>No feedback given</h1>
} 
{total !=0 &&
  <div>
  <h1>feedback</h1>
   <Statistics type="Good" value={good} />
   <Statistics type="Neutral" value={neutral} />
   <Statistics type="bad" value={bad} />
   <Statistics type="total" value={total} />
   <Statistics type="average" value ={(good - bad)/ total} />
   </div>
}
   </div>

  )
}
ReactDOM.render(<App />,
  document.getElementById('root')
  )
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const votesArray = Array(props.anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesArray)

  const handleSwitchClick = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }
  
  const handleVoteClick = () => {
    let copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)
  }

  const getMostVotesIndex = () => {
    return votes.indexOf(Math.max(...votes))
  }

  console.log(getMostVotesIndex());
  return (
    <div>
      <h1>Anecdotes of The Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>votes: {votes[selected]}</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleSwitchClick}>switch anecdote</button>

      <h2>Anecdotes With Most Votes</h2>
      <p>{props.anecdotes[getMostVotesIndex()]}</p>
      <p>votes: {votes[getMostVotesIndex()]}</p>
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
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
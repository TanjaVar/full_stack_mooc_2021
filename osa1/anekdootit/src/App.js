import React, {useState} from 'react';


const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0) //which cell is selected?
  const [votes, setVotes] = useState(new Array(7).fill(0)) //votes for each anecdote, default value 0
  const [anecdoteWithMostVotes, setAnecdoteWithMostVotes] = useState('') //Which anecdote has most votes?
  const [anecdoteWithMostVotesNum, setAnecdoteWithMostVotesNum] = useState(0) //current "most voted" anecdote's votes

  //calculates random number between 0 and 6 (array cells)
  //updates state
  const clickHandler = () => {
    setSelected(Math.floor(Math.random()*(anecdotes.length-0)+0))
  }


  //updates votenum for current anecdote
  //updates state with copy of 'votes' array
  const addVoteforAnecdote = () => {
    const copyOfVotes = {...votes} //make copy of existing 'votes' array
    copyOfVotes[selected] += 1 //add +1 vote for current anecdote
    setVotes(copyOfVotes) //updates state with updated votes array
    for (let i = 0; i <= 7; i++) {
      if (copyOfVotes[i] > anecdoteWithMostVotesNum) { //if array's current value is greater than mostVotesAnecdoteNum, then update it
        let mostVotes = copyOfVotes[i] //set new highest votevalue to mostVotes
        setAnecdoteWithMostVotes(anecdotes[i]) //set new anecdote to anecdoteWithMostVotes
        setAnecdoteWithMostVotesNum(mostVotes) //set votevalue to anecdoteWithMostVotesNum
      }
    }
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
      has {votes[selected]} votes <br/><br/>
      <button onClick={clickHandler}>next anecdote</button>
      <button onClick={addVoteforAnecdote}>vote</button><br/><br/>
      <h1>Anecdotes with most votes</h1>
      {anecdoteWithMostVotes}<br />
      {anecdoteWithMostVotesNum}
    </div>
  )
}

export default App


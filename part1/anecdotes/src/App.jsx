import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text} 
  </button>
)

const Anecdotes = ({anecdote}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote.text}</p>
      <p>has {anecdote.votes} votes</p>
    </div>
  )
} 

const MostVoteAnecdote = ({anecdotes}) => {
  const allVotesZero = anecdotes.every(anecdote => anecdote.votes === 0);
  const mostVoteAnecdote = anecdotes.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {allVotesZero ? (
        <p>Please vote for an anecdote</p>
      ) : (
        <p>{mostVoteAnecdote.text}</p>
      )}
    </div>
  );
}

const App = () => {
  const anecdotes = [
    { text: 'If it hurts, do it more often.', votes: 0 },
    { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { text: 'Premature optimization is the root of all evil.', votes: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
    { text: 'The only way to go fast, is to go well.', votes: 0 }
  ]

  const [selected, setSelected] = useState(0)
  const [anecdoteList, setAnecdoteList] = useState(anecdotes)

  const votesHandler = () => {
    const newAnecdotes = [...anecdoteList]
    newAnecdotes[selected].votes += 1
    setAnecdoteList(newAnecdotes)
  }

  const getRandomAnecdote = () => {
    let random;
    do {
      random = Math.floor(Math.random() * anecdotes.length);
    } while (random === selected);
    return random;
  }

  return (
    <div>
      <Anecdotes anecdote={anecdoteList[selected]} />
      <Button onClick={votesHandler} text="vote" />
      <Button onClick={() => setSelected(getRandomAnecdote())} text="next anecdote" /> 
      <MostVoteAnecdote anecdotes={anecdoteList} />
    </div>
  )
}


export default App

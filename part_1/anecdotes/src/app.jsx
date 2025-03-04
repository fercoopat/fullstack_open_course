import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes?.length).fill(0));

  const handleClick = () => {
    const random = Math.random() * anecdotes?.length - 1;
    const value = Math.ceil(random);
    setSelected(value);
  };

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] = votesCopy[selected] + 1;
    setVotes(votesCopy);
  };

  let anecdoteMoreVoted = 0;

  for (let index = 0; index < votes.length; index++) {
    if (votes[anecdoteMoreVoted] < votes[index]) {
      anecdoteMoreVoted = index;
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <button onClick={handleClick}>Next anecdote</button>
        <button onClick={handleVote}>Vote</button>
      </div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[anecdoteMoreVoted]}</p>
      <p>Has {votes[anecdoteMoreVoted]} votes</p>
    </div>
  );
}

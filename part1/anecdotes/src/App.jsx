import { useState } from 'react';
import BestAnecdote from './components/BestAnecdote';
import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import { anecdotes } from './constants/anecdotes';
import { getRandomInt } from './helpers/math.helpers';

const App = () => {
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length - 1));
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0));

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length - 1));
  };

  const handleAddVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <Header anecdotes={anecdotes} selected={selected} votes={votes} />
      <ButtonGroup>
        <button onClick={handleAddVote}>Vote</button>
        <button onClick={handleClick}>Next Anecdote</button>
      </ButtonGroup>
      <BestAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;

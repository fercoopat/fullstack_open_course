export default function Header({ votes, anecdotes, selected }) {
  const selectedAnecdote = anecdotes[selected];

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{selectedAnecdote}</p>
      <p>has {votes[selected]} votes</p>
    </>
  );
}

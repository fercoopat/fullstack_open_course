export default function BestAnecdote({ anecdotes, votes }) {
  const mostVotedAnecdote = anecdotes[votes.indexOf(Math.max(...votes))];

  return (
    <>
      <h2>Anecdote with most votes</h2>
      <p>{mostVotedAnecdote}</p>
      <p>has {Math.max(...votes)} votes</p>
    </>
  );
}

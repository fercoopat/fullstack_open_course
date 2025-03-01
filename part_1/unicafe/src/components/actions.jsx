export default function Actions({ onClick }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <button onClick={onClick('good')}>good</button>
      <button onClick={onClick('neutral')}>neutral</button>
      <button onClick={onClick('bad')}>bad</button>
    </div>
  );
}

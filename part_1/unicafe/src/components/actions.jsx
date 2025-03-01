import Button from './button';

export default function Actions({ onClick }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button onClick={onClick('good')}>good</Button>
      <Button onClick={onClick('neutral')}>neutral</Button>
      <Button onClick={onClick('bad')}>bad</Button>
    </div>
  );
}

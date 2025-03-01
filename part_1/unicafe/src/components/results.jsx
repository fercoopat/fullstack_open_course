import { getAverage, getPositiveFeedback } from '../helpers/results.helpers';

export default function Results({ good, neutral, bad }) {
  const all = good + neutral + bad || 0;
  const average = getAverage(good, neutral, bad);
  const positive = getPositiveFeedback(good, all);

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
}

import { getAverage, getPositiveFeedback } from '../helpers/results.helpers';
import StatisticLine from './statistic-line';

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad || 0;
  const average = getAverage(good, neutral, bad);
  const positive = getPositiveFeedback(good, all);

  return (
    <div>
      <h1>Statistics</h1>
      {!all ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={`${positive} %`} />
          </tbody>
        </table>
      )}
    </div>
  );
}

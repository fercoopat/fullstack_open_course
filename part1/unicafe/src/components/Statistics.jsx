import StatisticLine from './StatisticLine';

export default function Statistics({ good, bad, neutral }) {
  const total = good + neutral + bad;

  const average = (good * 1 + neutral * 0 + bad * -1) / total;

  const positive = (good / total) * 100;

  const data = {
    good,
    neutral,
    bad,
    all: total,
    average,
    positive,
  };

  if (!total) {
    return <h2>No feedback given</h2>;
  }
  return (
    <table>
      <tr>
        <td>
          <h2>Statistics</h2>
        </td>
      </tr>
      {Object.entries(data)?.map(([key, value]) => (
        <StatisticLine key={key} text={key} value={value || 0} />
      ))}
    </table>
  );
}

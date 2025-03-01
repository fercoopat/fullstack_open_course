import { useState } from 'react';
import Actions from './components/actions';
import Header from './components/header';
import Statistics from './components/statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleSuggestion = (suggestion) => () => {
    if (suggestion === 'good') {
      setGood((prev) => prev + 1);
    } else if (suggestion === 'neutral') {
      setNeutral((prev) => prev + 1);
    } else if (suggestion === 'bad') {
      setBad((prev) => prev + 1);
    } else {
      return;
    }
  };

  return (
    <div>
      <Header />
      <Actions onClick={handleSuggestion} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

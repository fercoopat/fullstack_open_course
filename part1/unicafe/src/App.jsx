import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';
import { COMMENT_TYPE, COMMENT_TYPE_VALUES } from './constants';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => () => {
    switch (type) {
      case COMMENT_TYPE.BAD:
        setBad((prev) => prev + 1);
        break;
      case COMMENT_TYPE.GOOD:
        setGood((prev) => prev + 1);
        break;
      case COMMENT_TYPE.NEUTRAL:
        setNeutral((prev) => prev + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {COMMENT_TYPE_VALUES?.map((type) => (
          <Button key={type} onClick={handleClick(type)}>
            {type}
          </Button>
        ))}
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

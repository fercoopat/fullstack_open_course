export const getAverage = (good = 0, neutral = 0, bad = 0) => {
  const totalScore = good * 1 + neutral * 0 + bad * -1;

  const totalResponses = good + neutral + bad;

  const average = totalResponses === 0 ? 0 : totalScore / totalResponses;

  return average;
};
export const getPositiveFeedback = (good = 0, total = 0) => {
  return (good / total) * 100 || 0;
};

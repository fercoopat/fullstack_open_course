export default function Total({ parts = [] }) {
  const total = parts
    ?.flatMap((part) => part?.exercises)
    ?.reduce(
      (exercisesAmount, currentValue) => (currentValue += exercisesAmount),
      0
    );

  return <p>Number of exercises {total}</p>;
}

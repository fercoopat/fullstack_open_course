export default function Total({ parts = [] }) {
  const total = parts
    ?.flatMap((part) => part?.exercises)
    ?.reduce(
      (exercisesAmount, currentValue) => (currentValue += exercisesAmount),
      0
    );

  return <p style={{ fontWeight: 600 }}>Total of {total} exercises</p>;
}

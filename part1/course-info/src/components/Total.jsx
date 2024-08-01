export default function Total({ content }) {
  const total = content?.reduce((prev, curr) => {
    return prev + curr?.exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
}

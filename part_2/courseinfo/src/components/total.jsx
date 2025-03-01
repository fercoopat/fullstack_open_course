export default function Total({ parts = [] }) {
  const total = parts?.reduce((curr, prev) => prev?.exercises + curr, 0);

  return <p style={{ fontWeight: 600 }}>Total of {total} exercises</p>;
}

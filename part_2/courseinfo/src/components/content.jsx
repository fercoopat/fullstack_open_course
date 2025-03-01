import Part from './part';

export default function Content({ parts = [] }) {
  return (
    <>
      {parts?.map((part, index) => (
        <Part key={index} part={part?.name} exercises={part?.exercises} />
      ))}
    </>
  );
}

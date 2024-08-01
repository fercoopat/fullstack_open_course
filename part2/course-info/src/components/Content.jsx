import Part from './Part';

export default function Content({ content }) {
  return (
    <>
      {content?.map((el, index) => (
        <Part key={index} part={el?.name} exercises={el?.exercises} />
      ))}
    </>
  );
}

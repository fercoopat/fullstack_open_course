import Content from './content';
import Header from './header';
import Total from './total';

export default function Course({ course }) {
  return (
    <div>
      <Header course={course} />
      <Content parts={course?.parts} />
      <Total parts={course?.parts} />
    </div>
  );
}

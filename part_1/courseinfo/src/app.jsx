import Content from './components/content';
import Header from './components/header';
import Total from './components/total';

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ],
};

export default function App() {
  return (
    <div>
      <Header course={course} />
      <Content parts={course?.parts} />
      <Total parts={course?.parts} />
    </div>
  );
}

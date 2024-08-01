import Course from './components/Course';
import { courses } from './constants';

const App = () => {
  return (
    <>
      {courses?.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;

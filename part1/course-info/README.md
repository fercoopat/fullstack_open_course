# Part1 - Course Info

- [x] 1.1: Refactor the code to consist of three new components: Header, Content and Total. All the data still resides in the App component, which passes the necessary data to each component via props. Header is responsible for displaying the name of the course, Content displays the parts and their number of exercises and Total displays the total number of exercises.

- [x] 1.2: Refactor the Content component so that it does not display any part names or their number of exercises by itself. Instead, it only represents three Part components of which each represents the name and number of exercises of a part.

- [x] 1.3: Modify the variable definitions of the App component as follows and also refactor the application to keep it working:

```javascript
const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return <div>...</div>;
};
```

- [x] 1.4: Place the objects in an array. Modify the App variable definitions as follows and modify the other parts of the application as necessary to keep it running:

```javascript
const App = () => {
  const course = 'Half Stack application development';
  const parts = [
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
  ];

  return <div>...</div>;
};
```

- [x] 1.5: Change the course and its parts to a single JavaScript object. Fixes anything that breaks.

```javascript
const App = () => {
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

  return <div>...</div>;
};
```

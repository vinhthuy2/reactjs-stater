import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'Thuy', age: 26 },
      { name: 'Thinh', age: 26 },
      { name: 'Tri', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: 'some other value'
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name = 'Tran Vinh Thuy';
    // set-method replaces state object
    setPersonState({
      persons: [
        { name: 'Thuy', age: 27 },
        { name: 'Thinh', age: 26 },
        { name: 'Tri', age: 26 }
      ]
    });
  };

  return (
    <div className="App">
      <h1> Hi, I 'm a react app</h1>
      <p> This is really working </p>
      <button onClick={switchNameHandler}>Switch name</button>
      <h2>{personsState.otherState}</h2>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;

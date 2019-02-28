import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {
        id: 'asdsdsasa',
        name: 'Max',
        age: 28
      },
      {
        id: 'asdsdsasasadwqexzcvsd',
        name: 'Manu',
        age: 29
      },
      {
        id: 'asdsdsasasaedwqncxz',
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleButtonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <Person
                click={() => this.deletePersonHandler(i)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={event => this.nameChangedHandler(event, p.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1> Hi, I 'm a React App</h1>
        <p className={classes.join(' ')}> This is really working! </p>
        {/* can be inefficient */}
        <button style={style} onClick={this.toggleButtonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

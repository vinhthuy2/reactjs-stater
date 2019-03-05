import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.jsx] constructor');
  }

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
    showPersons: false,
    showCockpit: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.jsx] getDerivedStateFromProps', props);
    // Initialize or update component's state from outside changes (which achieved from props)
    // Sync state to props
    return state;
  }

  componentDidMount() {
    console.log('[App.jsx] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.jsx] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.jsx] componentDidUpdate');
  }

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
    console.log('[App.jsx] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.toggleButtonHandler}
          />
        ) : null}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

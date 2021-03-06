import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Auxiliary';
import withClassWrapper from '../hoc/withClassWrapper';
import classes from './App.css';
import AuthContext from '../context/auth-context';
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
    showCockpit: false,
    authenticated: false
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

    this.setState((prevState, props) => {
      return { persons: persons };
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

  loginHandler = () => {
    this.setState({ authenticated: true });
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
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.toggleButtonHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClassWrapper(App, classes.App);

import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.jsx] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.jsx] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.jsx] getSnapshotBeforeUpdate');
    return { message: 'snapshot ne!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.jsx] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.jsx] componentWillUnmount');
  }

  render() {
    console.log('[Persons.jsx] renderings...');

    return this.props.persons.map((p, i) => {
      return (
        <Person
          click={() => this.props.clicked(i)}
          name={p.name}
          age={p.age}
          key={i}
          changed={event => this.props.changed(event, p.id)}
        />
      );
    });
  }
}

export default Persons;

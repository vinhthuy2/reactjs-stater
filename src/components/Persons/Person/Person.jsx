import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
class Person extends Component {
  render() {
    console.log('[Person.jsx] renderings...');
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>

        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

export default Person;

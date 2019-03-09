import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClassWrapper from '../../../hoc/withClassWrapper';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }

  componentDidMount = () => {
    this.inputElementRef.current.focus();
  };

  render() {
    console.log('[Person.jsx] renderings...');
    return (
      <Aux>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>

        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClassWrapper(Person, classes.Person);

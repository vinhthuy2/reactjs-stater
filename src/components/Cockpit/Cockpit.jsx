import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = props => {
  const authContext = useContext(AuthContext);
  const toggleBtnRef = useRef(null);

  // the same usage with componentDidUpdate() and componentDidMount()
  // HTTP request
  useEffect(() => {
    console.log('[Cockpit.jsx] useEffect');
    // setTimeout(() => {
    //   alert('This box will not show again');
    // }, 1000);

    // this will get call when component is mounted
    toggleBtnRef.current.click();

    // this will get called only when the component is unmounted
    return () => {
      console.log('[Cockit.jsx] cleanup works');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.jsx] 2nd useEffect');
    // this will get called after every render cycle
    return () => {
      console.log('[Cockit.jsx] 2nd cleanup works');
    };
  });

  // useEffect(() => {
  //   console.log('[Cockpit.jsx] useEffect');
  //   setTimeout(() => {
  //     alert('This box will show whenever persons get changed');
  //   }, 1000);
  // }, [props.persons]);

  let buttonClass = '';
  buttonClass = classes.Green;
  const classesAdded = [];
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    classesAdded.push(classes.red);
  }

  if (props.personsLength <= 1) {
    classesAdded.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title}</h1>
      <p className={classesAdded.join(' ')}> This is really working! </p>
      {/* can be inefficient */}
      <button
        className={buttonClass}
        onClick={props.clicked}
        ref={toggleBtnRef}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};
// Ract.memo() : shouldComponentUpdate()
export default React.memo(cockpit);

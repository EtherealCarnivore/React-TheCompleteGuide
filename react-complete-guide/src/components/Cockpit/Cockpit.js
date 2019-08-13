import React, {useEffect, useRef, useContext} from 'react';

import classes from '../Cockpit/Cockpit.css'
import './Cockpit.css';
import AuthContext from '../../context/auth-context'
import { log } from 'util';


const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
      toggleBtnRef.current.click();
    }, []);
    let assignedClasses = [];
    let btnClass = {
    color: ''
    };
    if(props.showPersons){
      btnClass.color = 'red';
    }
    if(props.persons <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
    <div className="Cockpit">
      <h1>Hi, I'm a React app!</h1>
      <h2>{props.title}</h2>
      <p className="red bold">Oh yeah? Prove it!</p>
          <button ref={toggleBtnRef}
          className='Button'
              onClick={props.click}>Show the people!
              </button>
              <button onClick={authContext.login}>Log in</button>
      </div>
);
};

export default React.memo(cockpit); // stores snapshot and updates DOM only on changes
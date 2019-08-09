import React from 'react';
import classes from '../Cockpit/Cockpit.css'
import './Cockpit.css';


const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = {
    color: ''
    };
    if(props.showPersons){
      btnClass.color = 'red';
    }
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
    <div className="Cockpit">
<h1>Hi, I'm a React app!</h1>
        <p className="red bold">Oh yeah? Prove it!</p>
          <button style={btnClass}
              onClick={props.click}>Show the people!</button>
         </div>
);
};

export default cockpit;
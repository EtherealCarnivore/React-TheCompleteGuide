import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
      persons:[
          {name: 'Konstantin', age: 24},
          {name: 'Angy', age: 23},
          {name: 'Oh ye, prove it', age: 69}
          ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons:[
            {name: newName, age: 24},
            {name: 'AngyPUUUUUUSH', age: 23},
            {name: 'OH YEAH, YOU PROVE IT', age: 69}
        ]})
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons:[
                {name: 'Konstantin', age: 24},
                {name: event.target.value, age: 23},
                {name: 'Oh ye, prove it', age: 69}
            ]
        })
    };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>Oh yeah? Prove it!</p>
          <button onClick={() => this.switchNameHandler('eEEEEEe')}>Switch Name!</button>
        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'AAAaaAa')}
                changed={this.nameChangedHandler}
        />
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person'


class App extends Component {
    state = {
      persons:[
          {id: 'asdas9', name: 'Konstantin', age: 24},
          {id: 'aslf8f',name: 'Angy', age: 23},
          {id: 'asopkfia9o2',name: 'Oh ye, prove it', age: 69}
          ],
        showPersons: false,
        userInput: ''
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    deletePerson = (personIndex) => {
        const personsCopy = [...this.state.persons];
        personsCopy.splice(personIndex, 1);
        this.setState({persons:personsCopy})
    };

    inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value})
    };

  render() {
      const style = {
        backgroundColor: 'gray',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons){
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                    return <Person key={person.id}
                                   click={() => this.deletePerson(index)}
                                   changed={(event) => this.nameChangedHandler(event, person.id)}
                                   name={person.name}
                                   age={person.age}/>
                  })}
              </div>
          )
      }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>Oh yeah? Prove it!</p>
          <button style={style}
              onClick={this.togglePersonsHandler}>Show the people!</button>
          {persons}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


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


  render() {
      let persons = null;

      if (this.state.showPersons){
          persons = (
              <div>
                <Persons persons={this.state.persons}
                clicked={this.deletePerson}
                changed={this.nameChangedHandler}/>
              </div>
          )
      }

      
    return (
      <div className="App">
        <Cockpit title={this.props.appTittle} 
                persons={this.state.persons.length}
                click={this.togglePersonsHandler}
                showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;

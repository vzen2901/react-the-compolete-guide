import React from 'react';
import {Component} from 'react'
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {name: 'han', age: 10},
      {name: 'hanh', age: 11},
      {name: 'don', age: 12},
      {name: 'chao', age: 13}
    ]
  }
  switchName = () => {
    this.setState({
      persons : [
        {name: 'han', age: 20},
        {name: 'hanh', age: 21},
        {name: 'don', age: 22},
        {name: 'chao', age: 23}
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h1>hi, i'm a react app</h1>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}></Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}></Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}></Person>
        <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age}></Person>
        <button onClick={this.switchName}>submit</button>

      </div>
    );
  }
}

// function App() {
//   return React.createElement('div',{className: App}, React.createElement('h1',null,'i am react app'));
// }

// class App extends Component {
//   render(){
//     return React.createElement('div', {className: App}, React.createElement('h1',null,'i am react app'));
//   }
// }


export default App;



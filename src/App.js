import React from 'react';
import './App.css';
import Person from './Person/Person';

import { useState } from 'react';

const App = (props) => {
  const [personState, setPpersonState] = useState({
    persons : [
            {name: 'han', age: 10},
            {name: 'hanh', age: 11},
            {name: 'don', age: 12},
            {name: 'chao', age: 13}
    ]
  });
  const switchName = () => {
    setPpersonState({
      persons : [
            {name: 'han', age: 20},
            {name: 'hanh', age: 21},
            {name: 'don', age: 22},
            {name: 'chao', age: 23}
          ]
    })
  }

  return (
          <div className="App">
            <header className="App-header">
            </header>
            <h1>hi, i'm a react app</h1>
            <Person name = {personState.persons[0].name} age = {personState.persons[0].age}></Person>
            <Person name = {personState.persons[1].name} age = {personState.persons[1].age}></Person>
            <Person name = {personState.persons[2].name} age = {personState.persons[2].age}></Person>
            <Person name = {personState.persons[3].name} age = {personState.persons[3].age}></Person>
            <button onClick={switchName}>submit</button>
    
          </div>
 );
}

export default App;


// import {Component} from 'react'
// class App extends Component {
//   state = {
//     persons : [
//       {name: 'han', age: 10},
//       {name: 'hanh', age: 11}-77,
//       {name: 'don', age: 12},
//       {name: 'chao', age: 13}
//     ]
//   }
//   switchName = () => {
//     this.setState({
//       persons : [
//         {name: 'han', age: 20},
//         {name: 'hanh', age: 21},
//         {name: 'don', age: 22},
//         {name: 'chao', age: 23}
//       ]
//     })
//   }
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//         </header>
//         <h1>hi, i'm a react app</h1>
//         <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}></Person>
//         <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}></Person>
//         <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}></Person>
//         <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age}></Person>
//         <button onClick={this.switchName}>submit</button>

//       </div>
//     );
//   }
// }




// function App() {
//   return React.createElement('div',{className: App}, React.createElement('h1',null,'i am react app'));
// }
// class App extends Component {
//   render(){
//     return React.createElement('div', {className: App}, React.createElement('h1',null,'i am react app'));
//   }
// }
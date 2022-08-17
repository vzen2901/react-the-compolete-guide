import React from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


// import { useState } from 'react';
// const App = (props) => {
//   const [personState, setPpersonState] = useState({
//     persons : [
//             {name: 'han', age: 10},
//             {name: 'hanh', age: 11},
//             {name: 'don', age: 12},
//             {name: 'chao', age: 13}
//     ]
//   });
//   const switchName = () => {
//     setPpersonState({
//       persons : [
//             {name: 'han', age: 20},
//             {name: 'hanh', age: 21},
//             {name: 'don', age: 22},
//             {name: 'chao', age: 23}
//           ]
//     })
//   }

//   return (
//           <div className="App">
//             <header className="App-header">
//             </header>
//             <h1>hi, i'm a react app</h1>
//             <Person name = {personState.persons[0].name} age = {personState.persons[0].age}></Person>
//             <Person name = {personState.persons[1].name} age = {personState.persons[1].age}></Person>
//             <Person name = {personState.persons[2].name} age = {personState.persons[2].age}></Person>
//             <Person name = {personState.persons[3].name} age = {personState.persons[3].age}></Person>
//             <button onClick={switchName}>submit</button>
    
//           </div>
//  );
// }


import {Component} from 'react'
class App extends Component {
  state = {
    persons : [
      {name: 'han', age: 10},
      {name: 'hanh', age: 11},
      {name: 'don', age: 12},
      {name: 'chao', age: 13}
    ],
    username: 'supermax',
    showPerson: false
  }
  switchNameAge = (newname) => {
    this.setState({
      persons : [
        {name: newname, age: 20},
        {name: 'hanh', age: 21},
        {name: 'don', age: 22},
        {name: 'chao', age: 23}
      ]
    })
  }

  nameChange = (event) =>{
    this.setState({
      persons : [
        {name: 'han', age: 30},
        {name: event.target.value, age: 31},
        {name: 'don', age: 32},
        {name: 'chao', age: 33}
      ]
    })
  }
  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

togglePersonsHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({
    showPerson: !doesShow
  })
}


  render(){
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPerson){
      persons = (
      <div>{/* ẩn hiện div này */}
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} switchNameAge = {this.switchNameAge.bind(this, 'newhan')}>Click</Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} nameChange={this.nameChange}></Person>
      </div>);
    }

    return (
      <div className="App">
        {/* {this.state.showPerson ?  */}
        {/* <div>{/* ẩn hiện div này */}
          {/* <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} switchNameAge = {this.switchNameAge.bind(this, 'newhan')}>Click</Person> */}
          {/* <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} nameChange={this.nameChange}></Person> */}
        {/* </div> */}
        {/* : null */}
        {persons}
        <button 
          // onClick={this.switchNameAge.bind(this, 'han')}
          onClick = {this.togglePersonsHandler}
          style={style}
        >submit</button>

        <UserOutput userName = {this.state.username} />
        <UserInput userName = {this.usernameChange}/>
        <UserOutput userName = "hanh" />
        <UserOutput userName = "don" />
        <UserOutput userName = "chao" />
      </div>
    );
  }
}


export default App;














// function App() {
//   return React.createElement('div',{className: App}, React.createElement('h1',null,'i am react app'));
// }
// class App extends Component {
//   render(){
//     return React.createElement('div', {className: App}, React.createElement('h1',null,'i am react app'));
//   }
// }


import React from 'react';
// import {Component} from 'react'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//       <h1>hi, i'm a react app</h1>
//     </div>
//   );
// }

function App() {
  return React.createElement('div',{className: App}, React.createElement('h1',null,'i am react app'));
}

// class App extends Component {
//   render(){
//     return React.createElement('div', {className: App}, React.createElement('h1',null,'i am react app'));
//   }
// }


export default App;



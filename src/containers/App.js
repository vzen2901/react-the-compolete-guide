// import React from 'react';
// import './App.css';

// import Radium from 'radium';
// import {StyleRoot} from 'radium';
// import Person from './Person/Person';
// // import UserInput from './UserInput/UserInput';
// // import UserOutput from './UserOutput/UserOutput';


// // import { useState } from 'react';
// // const App = (props) => {
// //   const [personState, setPpersonState] = useState({
// //     persons : [
// //             {name: 'han', age: 10},
// //             {name: 'hanh', age: 11},
// //             {name: 'don', age: 12},
// //             {name: 'chao', age: 13}
// //     ]
// //   });
// //   const switchName = () => {
// //     setPpersonState({
// //       persons : [
// //             {name: 'han', age: 20},
// //             {name: 'hanh', age: 21},
// //             {name: 'don', age: 22},
// //             {name: 'chao', age: 23}
// //           ]
// //     })
// //   }

// //   return (
// //           <div className="App">
// //             <header className="App-header">
// //             </header>
// //             <h1>hi, i'm a react app</h1>
// //             <Person name = {personState.persons[0].name} age = {personState.persons[0].age}></Person>
// //             <Person name = {personState.persons[1].name} age = {personState.persons[1].age}></Person>
// //             <Person name = {personState.persons[2].name} age = {personState.persons[2].age}></Person>
// //             <Person name = {personState.persons[3].name} age = {personState.persons[3].age}></Person>
// //             <button onClick={switchName}>submit</button>
    
// //           </div>
// //  );
// // }


// import {Component} from 'react'
// class App extends Component {
//   // tìm nạp dữ liệu tư máy chủ
//   state = {
//     persons : [
//       {id: '1', name: 'han', age: 10},
//       {id: '12', name: 'hanh', age: 11},
//       {id: '123', name: 'don', age: 12},
//       {id: '1234', name: 'chao', age: 13}
//     ],
//     username: 'supermax',
//     showPerson: false
//   }
//   // switchNameAge = (newname) => {
//   //   this.setState({
//   //     persons : [
//   //       {name: newname, age: 20},
//   //       {name: 'hanh', age: 21},
//   //       {name: 'don', age: 22},
//   //       {name: 'chao', age: 23}
//   //     ]
//   //   })
//   // }

//   nameChange = (event, id) =>{
//     const personIndex = this.state.persons.findIndex((tmp) => {return tmp.id === id});
//     const person = {...this.state.persons[personIndex]}
//     // const person = Object.assign({}, this.state.persons[personIndex])
//     person.name = event.target.value;
//     const persons = [...this.state.persons];
//     persons[personIndex] = person;
    
//     // const personIndex = this.state.persons.findIndex((tmp) => {return tmp.id === id});
//     // const persons = [...this.state.persons];
//     // persons[personIndex].name = event.target.value;

//     this.setState({
//       persons : persons
//     })
//   }
//   usernameChange = (event) => {
//     this.setState({
//       username: event.target.value
//     })
//   }

//   deletePersonsHandler = (personIndex) => {
//     // const persons = this.state.persons;
//     // không nên gán trực tiếp hai đối tượng, nên bản sao của chúng
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex,1);
    
//     this.setState({
//       persons: persons
//     })
//   }
//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPerson;
//     this.setState({
//       showPerson: !doesShow
//     })
//   }


//   render(){
//     const style = {
//       backgroundColor : 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer',
//       ':hover': {
//         backgroundColor: 'lightgreen',
//         color: 'black'
//       }
//     }

//     let persons = null;
//     if(this.state.showPerson){
//       persons = this.state.persons.map((person, index) => (
//         <Person name={person.name} 
//                 age={person.age} 
//                 click={() => this.deletePersonsHandler(index)}
//                 key={person.id}
//                 nameChange = {(event)=>this.nameChange(event, person.id)}
//         />
//       ));
//       // <div>{/* ẩn hiện div này */}
//       //   <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} switchNameAge = {this.switchNameAge.bind(this, 'newhan')}>Click</Person>
//       //   <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} nameChange={this.nameChange}></Person>
//       // </div>);
//       style.backgroundColor = 'red';
//       style[':hover'] = {
//         backgroundColor: 'lightred',
//         color: 'white'
//       };
//     }

//     // let classes = ['red', 'bold'].join(' ');
//     const classes = [];
//     if(this.state.persons.length <= 2){
//       classes.push('red');
//     }
//     if(this.state.persons.length <= 1){
//       classes.push('bold');
//     }


//     return (
//       <StyleRoot>
//         <div className="App">
//           <p className={classes.join(' ')}>This is really working!</p>
//           <button 
//             // onClick={this.switchNameAge.bind(this, 'han')}
//             onClick = {this.togglePersonsHandler}
//             style={style}
//           >Toggle Persons</button>
//           {/* {this.state.showPerson ?  */}
//           {/* <div>{/* ẩn hiện div này */}
//             {/* <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} switchNameAge = {this.switchNameAge.bind(this, 'newhan')}>Click</Person> */}
//             {/* <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} nameChange={this.nameChange}></Person> */}
//           {/* </div> */}
//           {/* : null */}
//           {persons}
          
//           {/* <UserOutput userName = {this.state.username} />
//           <UserInput userName = {this.usernameChange}/>
//           <UserOutput userName = "hanh" />
//           <UserOutput userName = "don" />
//           <UserOutput userName = "chao" /> */}
//         </div>
//       </StyleRoot>
//     );
//   }
// }


// export default Radium(App);

// // function App() {
// //   return React.createElement('div',{className: App}, React.createElement('h1',null,'i am react app'));
// // }
// // class App extends Component {
// //   render(){
// //     return React.createElement('div', {className: App}, React.createElement('h1',null,'i am react app'));
// //   }
// // }


import React from "react";
import './App.css';
import Person from '../componets/Persons/Person/Person';
import Cockpit from "../componets/Cockpit/Cockpit";

import {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    console.log("sppjs contructor");
    // this.states = 'ss';
  }

  state = {
    persons : [
      {id: '1', name: 'han', age: 10},
      {id: '12', name: 'hanh', age: 11},
      {id: '123', name: 'don', age: 12},
      {id: '1234', name: 'chao', age: 13}
    ],
    username: 'supermax',
    showPerson: false,
    showCockpit: true,
    changedCounter: 0
  }
  static getDerivedStateFromProps(props, state){
    console.log("appjs getDriveStateFromProps",props);
    return state;
  }
  componentDidMount(){
    console.log("appjs componentDidMount");
  }



  
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex((tmp) => {return tmp.id === id});
    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons : persons,
        changedCounter: prevState.changedCounter + 1 
      };
    });
  }
  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }


  render(){
    console.log("appjs render");
    let Persons = null;
    if(this.state.showPerson){
      Persons = (<Person
                    persons = {this.state.persons}
                    clicked = {this.deletePersonsHandler}
                    Changed = {this.nameChangeHandler}
                />);
    }
    return (
        <div className="App">
          <button onClick={() => {
              this.setState({showCockpit: false });
            }}
          >remove cockpit</button>
          {this.state.showCockpit ? <div>
            <Cockpit 
              onClick = {this.togglePersonsHandler}
              persons = {this.state.persons}
            /> 
            {Persons} 
          </div> : null} 
        </div>
    );
  }
}
export default App;

// import React from "react";
// import './Person.css';

// import Radium from "radium";


// const Person = (props) => {
//     const style = {
//         '@media (min-Width: 500px)': {
//                 width: '450px',
//                 border: '1px solid #FF0000'
//         }
//     };
//     return (
//             <div className="Person" style={style}>
//                 <p onClick={props.click}>i am {props.name} and i am years old {props.age}</p>
//                 {/* <p onClick={props.switchNameAge}>{props.children}</p> */}
//                 <input type="text" onChange={props.namehange} defaultValue = {props.name}/>
//             </div>
//     );
// }
// export default Radium(Person);
import React from "react";
import './Person.css';

const Person = (props) => props.persons.map((person, index) => {  
    console.log("personjs rendering...");
    return (
            <div className="Person" key = {person.id}>
                <p onClick={() => props.clicked(index)}>i am {person.name} and i am years old {person.age}</p>
                <input type="text" onChange={(event)=>props.Changed(event, person.id)} defaultValue = {person.name}/>
            </div>
    );
});

export default Person;

import React from "react";
import './Person.css';

import Radium from "radium";


const Person = (props) => {
    const style = {
        '@media (min-Width: 500px)': {
                width: '450px',
                border: '1px solid #FF0000'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>i am {props.name} and i am years old {props.age}</p>
            {/* <p onClick={props.switchNameAge}>{props.children}</p> */}
            <input type="text" onChange={props.nameChange} defaultValue = {props.name}/>
        </div>
    );
}
export default Radium(Person);
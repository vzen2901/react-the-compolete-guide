
import React from "react";
const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>i am {props.name} and i am years old {props.age}</p>
            {/* <p onClick={props.switchNameAge}>{props.children}</p> */}
            <input type="text" onChange={props.nameChange} defaultValue = {props.name}/>
        </div>
    );
}
export default Person;
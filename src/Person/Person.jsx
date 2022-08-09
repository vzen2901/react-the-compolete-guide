
import React from "react";
const Person = (props) => {
    return (
        <div>
            <p>i am {props.name}, age {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}
export default Person;
import React from "react";
const Cockpit = (props) => {
    return (
        <div>
            <p>This is really working!</p>
            <button 
             onClick = {props.onClick}
            >Toggle Persons</button>
        </div>
    );
};
export default Cockpit;
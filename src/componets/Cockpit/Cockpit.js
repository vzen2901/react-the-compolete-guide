import React from "react";
import { useEffect } from "react";
const Cockpit = (props) => {
    useEffect(() => {
        console.log("cockpit.js useEffect");
        //http request...
    });
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
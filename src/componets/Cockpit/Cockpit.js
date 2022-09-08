import React from "react";
import { useEffect } from "react";
const Cockpit = (props) => {
    useEffect(() => {
        console.log("cockpit.js 1 useEffect");
        //http request...
        setTimeout(() => {
            alert('saved data to clould');
        }, 1000);
        return () => {
            console.log("cockpitjs 1 cleanup work in useEffect")
        };
    }, [props.persons]);
    useEffect(() => {
        console.log("cockpit.js 2 useEffect");
        return () => {
            console.log("cockpitjs 2 cleanup work in useEffect")
        };
    });
    return (
        <div>
            <p>This is  really working!</p>
            <button 
             onClick = {props.onClick}
            >Toggle Persons</button>
        </div>
    );
};
export default React.memo(Cockpit);
import React from "react";
const UserInput = (props) => {
    return (
        <div>
            <input type = "text" onChange={props.userName}></input>
        </div>
    );
};

export default UserInput;
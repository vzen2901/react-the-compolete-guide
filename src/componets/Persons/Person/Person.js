import React, {Component} from "react";
import './Person.css';

class Person extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return this.props.persons.map((person, index) => { 
            return(
                <div className="Person" key = {person.id}>
                    <p onClick={() => this.props.clicked(index)}>i am {person.name} and i am years old {person.age}</p>
                    <input type="text" onChange={(event)=>this.props.Changed(event, person.id)} defaultValue = {person.name}/>
                </div>
            );
        });
    }
}

export default Person;
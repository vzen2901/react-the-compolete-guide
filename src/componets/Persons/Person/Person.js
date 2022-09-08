import React, {Component} from "react";
import './Person.css';

class Person extends Component {
    // constructor(props){
    //     super(props);
    // }
    static getDerivedStateFromProps(props, state){
        console.log("personjs getDerivedStateFromProps");
        return true;
    }

    componentDidMount(){
        console.log("personjs componentDidMount");
      }

    shouldComponentUpdate(nextProps, nextState){
        console.log("personjs shouldComponentUpdate");
        return true;//hủy cập nhật
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("personjs getSnapshotBeforeUpdate");
    }
    

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("personjs componentDidUpdate");
    }
    //componentDidUpdate() được sử dụng thường xuyên nhất
    
    componentWillUnmount(){
        console.log("person js componentWillUnmount");


        
    };
    
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
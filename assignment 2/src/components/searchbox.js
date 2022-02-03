import React from 'react';
import './searchbox.css';

class AddItemBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: 'write here',
            array: this.props.data
        }     
        console.log("STATE SEARCHBOX= ", this.state.array); 
        console.log("LIST SEARCHBOX= ", [this.props.data.list]); 
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    onSubmit = () => {
        console.log("SUBMIT SEARCHBOX = ",this.state.value);
        this.state.array.push(this.state.value);
        console.log("SEARCHBOX = ",this.state.array);
        this.setState({
        });
       
    }
    render(){
        
        return (
            <div className="container">
                <label><h1>ADD TODO LIST ITEM</h1></label><br></br>
                <input type="text" placeholder="add item" value={this.state.value} onChange={this.onChange}></input>
                <button value="SUBMIT" placeholder="Submit" onClick={this.onSubmit}>SUBMIT</button>
            </div>
        )
    }  
}

export default AddItemBox;

//add todo box to add items to data
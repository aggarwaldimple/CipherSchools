import React from 'react';
import './Add-todo.css';


class AddList extends React.Component {
    constructor (props) {
        super(props);
        console.log("TODO CONSTRUCTOR" , this.props.data );
        //const item = this.props.data;
        
    }
    

    render() {  
        console.log("inside render");
        return (
                
                <div>
                  {/* <h1>WORKING CARD</h1> */}
                   {/* <AddList data={data}/> */}
                    <card>
                    <card-title>ITEM LIST</card-title>
                    <card-content><h1>HERE IS THE DATA {this.props.data} </h1></card-content>
                    <card-description>{this.props.data} is the description</card-description>
                    </card>
                  </div>
        )
                
    }
}

export default AddList;

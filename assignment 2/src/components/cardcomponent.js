import React from 'react';
import './cardcomponent.css';

class CardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            data: this.props.data

        }
        
        
    }

    done = (event) => {
        console.log(" CARD COMPONENT done background ",event.target);
        event.target.style.backgroundColor = 'green';
    }

    remove = (event) => {
        console.log("REMOVE background  CARD COMPONENT  ", " value is = ");
        event.target.style.backgroundColor ="red";
        console.log("CARD COMPONENT  = ",event.target.value);
        console.log("data before removing CARD COMPONENT  = ",this.state.data);
        this.setState({
            data: this.state.data.pop(event.target.value)
        })
        
    }

    render(){
        console.log("CARD COMPONENT  data is = ",this.props.data);
        const value = this.props.data;
        // const text=value.json();
        // console.log("text is = ",text);
        console.log("CARD COMPONENT  value is = ",value);

        return(

            this.props.data.map((data)=>{
                // console.log(`THIS IS DATA ${data.id} ${data.name}`);
            return (
                <div className="cardcomponent">
                    <div className="row">
                        <h1>{data.id} {data.name}</h1>
                        <button onClick={this.done}>DONE</button>
                        <button onClick={this.remove } value={data.id}>CLOSE</button>
                    </div>
                </div>
                )
               
            }
            )
            
        );
    }

}
export default CardComponent;

//pass whole data then render components

//pass data one by one and paste one component
import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import AddList from './Add-todo';
import AddItemBox from './components/searchbox';
import CardComponent from './components/cardcomponent';

class App extends React.Component {
    constructor() {
          super();
          this.state = {
          list: [
            {
              id:1,
              name:'aaa'
            },
            {
              id:2,
              name:'bbb'
            }]
          }
          console.log("inside APP CONSTRUCTOR ",this.state.list);
    }
    
    handleChange = (item) => {
      this.setState({
        list: item        
      });
    }
      
    
    // onSubmit = (event)=> {
     
    // }
    // componentDidMount() {
    //   console.log("mount");
    //   this.setState({
        
    //     list: this.state.list
    //   })
    // }

    // componentDidUpdate() {
    //   console.log("will update");
    //   this.setState({
    //     list: this.state.list
    //   })
    // }

    render() {
      console.log("inside render APP");
      const valueis = this.state.list;
      console.log("item = ",this.state[2]);
        return (  
          <div className="container-fluid">
              <div className="Box">
                <div className="add">
                  <AddItemBox data={this.state.list}/>
                </div>

                <div className="cardbox">
                  <CardComponent data={this.state.list}/>
                    {/* <CardComponent data={
                      {
                      list: this.state.list
                      // change:this.handleChange.bind(this)
                      }}/> */}
                </div>                
                <h2>THE LENGTH IS {valueis.length}</h2>
              </div>
          </div>
          
        )     
    }
}

export default App;

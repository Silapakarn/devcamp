import './App.css';
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <Data_test />
    );
  }
}


class Data_test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Unknown User'};
  }
  
  componentDidMount() {
    const name = prompt("Please enter your name: ")
    this.setState({ name: name })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name && nextState.name !== " ") {

      if(nextState.name === this.state.name) {
        alert('This name is already in use!')
        return false;
      }else {

        let results = document.getElementById("results")
        results.innerHTML += `<li> First name: ${this.state.name} <br/> Second name: ${nextState.name} <br/> Date: ${Date()} <li/>`

        return true;
      }

    }else{
      this.setState({ name: `Unknown User`})
      return false
    }

  }

  render() {
    console.log(this.state.name);
    
    return ( <>
    <div style={{marginLeft: '15px'}}>

      <h2>Welcome My Website</h2>
      <h1>{this.state.name}</h1>

      <label>

          New Name:
          <input style={{marginLeft: '10px'}} type={"text"} id={"input_name"}/>


          <button style={{marginLeft: '10px'}} 
          onClick={()=>{const value = document.getElementById("input_name").value
          this.setState({ name: value })

        }} >Change Your Name</button>

      </label>


      <ul id="results">
        
      </ul>
    </div>

    </>
    );
  }
}









export default App;

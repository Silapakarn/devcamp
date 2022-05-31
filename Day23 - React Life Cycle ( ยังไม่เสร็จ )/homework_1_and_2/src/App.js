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
    this.state = {
      name: 'Unknown User',
      history: []
    }
  }
  
  //Method จะทำงานเมื่อทำการ Render เสร็จ ซึ่ง Method จะทำงานเพียงครั้งเดียว เช่น ยิง API
  componentDidMount() {
    const name = prompt("Please enter your name: ")
    this.setState({ name: name })
  }


  //Method ที่ทำงานเมื่อมีการเปลี่ยน Props หรือ state โดยตัว Method ต้อง Return ค่า Boolean = true or false
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.name)
    console.log(nextState.name)

    if (nextState.name && nextState.name !== " ") {

      if(nextState.name === this.state.name) {
            alert('This name is already in use!')
            return false;
      }else {
        return true;
      }
    }else{
      return this.setState({ name: `Unknown User`})
    }
  }


  render() {
    console.log(this.state.name);
    
    return ( <>
    <div style={{marginLeft: '15px'}}>

      <h2>Welcome My Website</h2>
      <h1 style={{color: 'red'}}>{this.state.name}</h1>

      <label>
          New Name:
          <input style={{marginLeft: '10px'}} type={"text"} id={"input_name"}/>

          <button style={{marginLeft: '10px'}} 
              onClick={()=>{
                const submit = document.getElementById("input_name").value

          this.setState({ 
            name: submit? submit : 'Unknown',
            history: [
              ...this.state.history,
              {
                previous : [this.state.name],
                current : [submit? submit : 'Unknown'],
                Date: Date()
              }
            ]
          })
        }} >Change Your Name</button>
      </label>

      <p> {this.state.history.map((x) => {
            return (
              <div>
              
                <p>
                  Current Name: {x.previous} 
                </p>
                <p>
                  Next Name: {x.current}
                </p>
                <p>
                  Date : {x.Date}
                </p>
            
              </div>
            );
          })}
      </p>
    </div>

    </>
    );
  }
}

export default App;

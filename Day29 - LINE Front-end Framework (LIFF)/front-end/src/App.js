import React, { Component } from 'react';

const liff = window.liff;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Silapakarn',
      userLineID: '',
      pictureUrl: 'https://www.looper.com/img/gallery/heres-where-you-can-watch-the-how-to-train-your-dragon-trilogy/intro-1627431707.jpg'
    };
  }

  componentDidMount = async() => {

    await liff.init({ liffId: `1657206782-wPgvkRgd` }).catch(err=>{throw err});
    
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
      });
    }else{
      liff.login();
    }
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="support">
            <p>ชื่อ {this.state.name}</p>
            <p>Line ID {this.state.userLineID}</p>
            <img alt='pic' src={this.state.pictureUrl} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
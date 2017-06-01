import React, { Component } from 'react';
import './App.css';
import Button from '../components/Button.js'

class App extends Component {
  start() {

  }
  reset(){

  }
  stop() {
    
  }
  render() {
    return (
    <div className="App">
     <h1>Hello from React</h1>
     <div>
     <Button action={this.start.bind(this)} type="main" label="Start"></Button>
     &nbsp;
     <Button action={this.stop.bind(this)} type="main" label="Stop"></Button>
     &nbsp;
     <Button action={this.reset.bind(this)} type="test" label="Reset"></Button>
     </div>
    </div>
    );
  }
}

export default App;

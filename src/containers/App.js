import React, { Component } from 'react';
import './App.css';
import Button from '../components/Button.js'
import Clock from '../components/Clock.js'

class App extends Component {
  constructor() {
    super();
    this.state={running: false, time: 25 * 60, working: true, lastTick: null}
    this.ticker = null;
  }
  start() {
    if (this.state.running) {
      return;
    }
    const currentTime = Math.floor(Date.now() / 1000);
    this.setState({running: true, lastTick: currentTime})
    this.ticker=setInterval(() => {
      this.tick(Math.floor(Date.now() / 1000))
    },1000);
  }
  reset(){
    this.setState({time: 25 * 60, working: true})    
  }
  stop() {
    this.setState({running: false});
    clearInterval(this.ticker);
  }
  tick(currentTime) {
    if (!this.state.running) {
      return;
    }
    const delta = currentTime - this.state.lastTick;
    if (delta >= 1) {      
      this.setState({time: this.state.time - delta, lastTick: currentTime});
    }
  }
  render() {
    return (
    <div className="App">
     <h1>Hello from React</h1>
     <Clock time={this.state.time}></Clock>
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

import React from 'react';
import ChatBox from './chatBox/chatBox.jsx';
import Display from './display/Display.jsx';

import io from 'socket.io-client'
import socketAPI from '../utilities/subscribeToTimer.jsx';

const socket = io();

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      display: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let {name, value} = e.target;
    console.log(name, value)
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    });
  }

  handleSubmit(e) {
    socket.removeAllListeners();
    e.preventDefault();
    socket.emit('chat message', this.state.text);
    this.setState({
      text: ''
    }, () => {
      console.log(this.state);
    });
    socket.on('chat message', (message) => {
      let newDisplay = this.state.display.slice(0);
      newDisplay.push(message);
      this.setState({
        display: newDisplay, 

      });
    });
  };
  
  render() {
    // socketAPI((err, timestamp) => this.setState({
    //   timestamp
    // }));
    return(
      <div>
        this is Main!!!
        <Display messages={this.state.display}/>
        <ChatBox 
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          text={this.state.text}/>
      </div>
    )
  };
};
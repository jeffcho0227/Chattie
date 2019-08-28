import React from 'react';
import ChatBox from './chatBox/chatBox.jsx';
import io from 'socket.io-client'
import socketAPI from '../utilities/subscribeToTimer.jsx';

const socket = io('http://localhost:3000');

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
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    socket.emit('chat message', this.state.text);
    this.setState({
      text: ''
    });
    socket.on('chat message', (message) => {
      let newDisplay = this.state.display.slice();
      newDisplay.push(message);
      this.setState({
        display: newDisplay
      }, () => {
        console.log(this.state, 'after submitting')
      })
    });
  };
  
  render() {
    // socketAPI((err, timestamp) => this.setState({
    //   timestamp
    // }));
    return(
      <div>
        this is Main!!!
        <ChatBox 
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}/>
      </div>
    )
  };
};
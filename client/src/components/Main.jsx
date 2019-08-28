import React from 'react';
import ChatBox from './chatBox/chatBox.jsx';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        this is Main!!!
        <ChatBox />
      </div>
    )
  };
};
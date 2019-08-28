import React from 'react';

function chatBox(props) {
  return (
    <div>
      <ul id="messages"></ul>
      <form onSubmit={props.handleSubmit}>
        <input id="m" name='text' autoComplete="off" onChange={props.handleInputChange}/><button>Send</button>
      </form>
    </div>
  );
};

export default chatBox;
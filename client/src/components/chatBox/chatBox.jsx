import React from 'react';

function chatBox(props) {
  return (
    <div>
      <ul id="messages"></ul>
      <form onSubmit={props.handleSubmit}>
        <input name="text" autoComplete="off" value={props.text} onChange={(e) => props.handleInputChange(e)}/><button>Send</button>
      </form>
    </div>
  );
};

export default chatBox;
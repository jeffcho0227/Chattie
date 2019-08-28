import React from 'react';

function chatBox () {
  return (
    <div>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autoComplete="off" /><button>Send</button>
      </form>
    </div>
  );
};

export default chatBox;
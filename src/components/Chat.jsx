import React from 'react';

function Chat() {
  return (
    <div className="chat-wrapper">
      <div className="chat-title-wrapper">
        <span className="chat-title">CHAT</span>
      </div>
      {/* <div className="text-wrapper" /> */}
      <input className="text-input" type="text" placeholder="Chat here" />
    </div>
  );
}

export default Chat;

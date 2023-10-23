import React from 'react';

function Chat() {
  return (
    <div className="chat-wrapper">
      <div className="chat-title-wrapper">
        <span className="chat-title">CHAT</span>
      </div>
      {/* <div className="text-wrapper" /> */}
      <input className="chat-text-input" type="text" placeholder="Chat here..." />
      <img src="src/assets/icons/chat-bubble-icon.png" alt="chat bubble icon" className="chat-bubble-icon" />
    </div>
  );
}

export default Chat;

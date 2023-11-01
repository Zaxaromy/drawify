import React from 'react';
import Answers from './Answers';

function ChatSystem({ children }) {
  return (
    <div className="chat-system-wrapper">
      <Answers />
      <span className="divider" />
      {children}
    </div>
  );
}

export default ChatSystem;

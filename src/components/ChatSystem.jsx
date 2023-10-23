import React from 'react';
import Answers from './Answers';
import Chat from './Chat';

function ChatSystem() {
  return (
    <div className="chat-system-wrapper">
      <Answers />
      <span className="divider" />
      <Chat />
    </div>
  );
}

export default ChatSystem;

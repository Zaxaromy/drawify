import React, { useState, useEffect } from 'react';

function Chat({ socket }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Listen for messages from the server
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      socket.emit('message', { text: inputMessage });
      setInputMessage('');
    }
    console.log(inputMessage);
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-title-wrapper">
        <span className="chat-title">CHAT</span>
      </div>
      <div style={{
        border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto',
      }}
      >
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <button onClick={sendMessage}>Send</button>
      <input
        className="chat-text-input"
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Chat here..."
      />
      <img src="src/assets/icons/chat-bubble-icon.png" alt="chat bubble icon" className="chat-bubble-icon" />
    </div>
  );
}

export default Chat;

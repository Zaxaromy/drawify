import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import CanvasComponent from './CanvasComponent';
import Tools from './Tools';
import ChatSystem from './ChatSystem';
import Underbar from './Underbar';

function CanvasPage() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <div className="canvas-page">
      <div className="canvas-wrapper">
        {socket && <CanvasComponent socket={socket} />}
        <Underbar />
      </div>
      <ChatSystem />
    </div>
  );
}

export default CanvasPage;

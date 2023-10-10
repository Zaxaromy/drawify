import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import CanvasComponent from './CanvasComponent';

function ServerConnection() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <>
      <div className="palette">
        <h1>palette</h1>
      </div>

      <div className="brushes">
        <h1>brushes</h1>
      </div>

      <div className="items">
        <h1>items</h1>
      </div>

      <div className="finish">
        <h1>finish</h1>
      </div>

      <div className="canvas">
        {socket && <CanvasComponent socket={socket} />}
      </div>
    </>
  );
}

export default ServerConnection;

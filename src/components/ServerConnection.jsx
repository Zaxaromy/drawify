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
      <span className="palette">
        <span className="color-1" />
        <span className="color-2" />
        <span className="color-3" />
        <span className="color-4" />
        <span className="color-5" />
        <span className="color-6" />
      </span>

      <div className="canvas">
        {socket && <CanvasComponent socket={socket} />}
      </div>
    </>
  );
}

export default ServerConnection;

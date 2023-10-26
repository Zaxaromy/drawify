import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import CanvasComponent from './CanvasComponent';
import ChatSystem from './ChatSystem';
import Underbar from './Underbar';
import LineWidthProvider from './LineWidthProvider';
import { ColorProvider } from './ColorContextProvider';
import { ClearCanvasProvider } from './ClearCanvasContext';

function CanvasPage() {
  const [socket, setSocket] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#000000');

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SERVER_URL);
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <LineWidthProvider>
      <ColorProvider>
        <ClearCanvasProvider>
          <div className="canvas-page">
            <div className="canvas-wrapper">
              {socket && <CanvasComponent socket={socket} selectedColor={selectedColor} />}
              <Underbar setSelectedColor={setSelectedColor} />
            </div>
            <ChatSystem />
            <span className="attribution">
              Icons by
              <span> </span>
              <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">Freepik</a>
            </span>
          </div>
        </ClearCanvasProvider>
      </ColorProvider>
    </LineWidthProvider>
  );
}

export default CanvasPage;

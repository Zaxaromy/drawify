import React, { useEffect, useRef } from 'react';
import { useLineWidthContext } from './LineWidthProvider';

// eslint-disable-next-line react/prop-types
function CanvasComponent({ socket }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const isDrawing = useRef(false);
  const prevPos = useRef(null);
  const { lineWidth, setLineWidth } = useLineWidthContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = lineWidth;
    contextRef.current = context;

    const handleLineWidthChange = (newWidth) => {
      contextRef.current.lineWidth = newWidth; // Update the context value
      setLineWidth(newWidth); // Update the context value
    };
    handleLineWidthChange(lineWidth);

    // eslint-disable-next-line react/prop-types
    socket.on('draw', (data) => {
      const { x, y, drawing } = data;

      if (prevPos.current !== null && drawing) {
        contextRef.current.beginPath();
        contextRef.current.moveTo(prevPos.current.x, prevPos.current.y);
        contextRef.current.lineTo(x, y);
        contextRef.current.stroke();
      }

      prevPos.current = { x, y };
    });

    const handleMouseMove = (event) => {
      if (isDrawing.current) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // eslint-disable-next-line react/prop-types
        socket.emit('draw', { x, y, drawing: true });

        if (prevPos.current !== null) {
          contextRef.current.beginPath();
          contextRef.current.moveTo(prevPos.current.x, prevPos.current.y);
          contextRef.current.lineTo(x, y);
          contextRef.current.stroke();
        }

        prevPos.current = { x, y };
      }
    };

    const handleMouseUp = () => {
      isDrawing.current = false;
      prevPos.current = null;
      // eslint-disable-next-line react/prop-types
      socket.emit('draw', { drawing: false }); // Signal that drawing has ended
    };

    document.addEventListener('mousedown', () => {
      isDrawing.current = true;
      prevPos.current = null;
    });

    document.addEventListener('mouseup', handleMouseUp);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // eslint-disable-next-line no-return-assign
      document.removeEventListener('mousedown', () => isDrawing.current = true);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [socket, lineWidth]);

  return <canvas ref={canvasRef} width={1200} height={800} />;
}

export default CanvasComponent;

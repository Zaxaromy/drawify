import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
function CanvasComponent({ socket }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const isDrawing = useRef(false);
  const prevPos = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineJoin = 'round';
    context.lineCap = 'round';

    contextRef.current = context;

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
  }, [socket]);

  return <canvas ref={canvasRef} width={800} height={600} />;
}

export default CanvasComponent;
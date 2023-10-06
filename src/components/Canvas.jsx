import React, { useRef, useEffect } from 'react';

const Canvas = ({ socket }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let isDrawing = false;

        canvas.addEventListener('mousedown', () => {
            isDrawing = true;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!isDrawing) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Draw on the canvas
            context.lineTo(x, y);
            context.stroke();

            // Send drawing data to the server
            socket.emit('draw', { x, y });
        });

        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });
    }, [socket]);

    return <canvas ref={canvasRef} width="800" height="600"></canvas>;
};

export default Canvas;

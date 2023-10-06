import React, { useRef, useEffect } from 'react';

const Canvas = ({ socket }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let isDrawing = false;
        let prevX, prevY;

        socket.on('draw', (data) => {
            const { x, y } = data;

            // Begin a new path if it's a new drawing
            if (prevX === undefined || prevY === undefined) {
                context.beginPath();
                context.arc(x, y, 5, 0, Math.PI * 2);
                context.fillStyle = 'black';
                context.fill();
            } else {
                // Draw a line segment from previous position to current position
                context.beginPath();
                context.moveTo(prevX, prevY);
                context.lineTo(x, y);
                context.lineWidth = 5;
                context.strokeStyle = 'black';
                context.stroke();
                context.closePath();

                // Draw a circle at the current position
                context.beginPath();
                context.arc(x, y, 5, 0, Math.PI * 2);
                context.fillStyle = 'black';
                context.fill();
            }

            prevX = x;
            prevY = y;
        });

        canvas.addEventListener('mousedown', () => {
            isDrawing = true;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!isDrawing) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

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

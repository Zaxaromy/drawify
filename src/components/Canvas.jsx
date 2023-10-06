import React, { useRef, useEffect } from 'react';

const Canvas = ({ socket }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let isDrawing = false;

        socket.on('draw', (data) => {
            // Extract drawing data (for example, x and y coordinates)
            const { x, y } = data;

            // Begin a new path and move to the specified coordinates
            context.beginPath();

            context.arc(x, y, 5, 0, Math.PI * 2)

            // Set line style and color
            context.lineWidth = 2;
            context.strokeStyle = 'black';

            // Stroke the path (draw the line)
            context.stroke();

            context.fill();

            context.closePath();

            console.log(data)
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

import React, { useEffect, useRef } from 'react';

const Canvas = ({ socket }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.strokeStyle = 'black';
        context.lineJoin = "round";
        context.lineCap = "round";

        let isDrawing = false;
        let [lastX, lastY] = [0, 0];

        const drawLine = (event) => {
            if (!isDrawing) return;

            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(event.offsetX, event.offsetY);
            context.stroke();
            lastX = event.offsetX;
            lastY = event.offsetY;

            // Send drawing data to the server
            socket.emit('draw', { x: lastX, y: lastY });
        }

        document.addEventListener('mousemove', drawLine);

        const handleMouseDown = (e) => {
            isDrawing = true;
            lastX = e.offsetX;
            lastY = e.offsetY;
        }

        const handleMouseUp = () => isDrawing = false;

        const handleMouseOut = () => isDrawing = false;

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', drawLine);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [socket]);

    return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;

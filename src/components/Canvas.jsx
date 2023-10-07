import React, { useEffect, useRef } from 'react';

const Canvas = ({ socket }) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const isDrawing = useRef(false);
    const lastX = useRef(0);
    const lastY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.strokeStyle = 'black';
        context.lineJoin = "round";
        context.lineCap = "round";

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        contextRef.current = context;

        socket.on('draw', (data) => {
            const { x, y } = data;

            context.beginPath();
            context.moveTo(lastX.current, lastY.current);
            context.lineTo(x, y);
            context.stroke();

            lastX.current = x;
            lastY.current = y;
        });

        const handleMouseDown = (e) => {
            isDrawing.current = true;
            lastX.current = e.clientX;
            lastY.current = e.clientY;
        };

        const handleMouseUp = () => {
            isDrawing.current = false;
        };

        const drawLine = (event) => {
            if (!isDrawing.current) return;

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            socket.emit('draw', { x, y });

            contextRef.current.beginPath();
            contextRef.current.moveTo(lastX.current, lastY.current);
            contextRef.current.lineTo(x, y);
            contextRef.current.stroke();

            lastX.current = x;
            lastY.current = y;
        }

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', drawLine);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', drawLine);
        };
    }, [socket]);

    return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;

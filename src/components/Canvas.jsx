import React, { useEffect, useRef } from 'react';

const Canvas = ({ socket }) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const isDrawing = useRef(false);
    const prevPos = useRef(null);

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

            if (prevPos.current !== null) {
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

                socket.emit('draw', { x, y });

                if (prevPos.current !== null) {
                    contextRef.current.beginPath();
                    contextRef.current.moveTo(prevPos.current.x, prevPos.current.y);
                    contextRef.current.lineTo(x, y);
                    contextRef.current.stroke();
                }

                prevPos.current = { x, y };
            }
        }

        document.addEventListener('mousedown', (event) => {
            isDrawing.current = true;
            prevPos.current = null;
        });

        document.addEventListener('mouseup', () => {
            isDrawing.current = false;
            prevPos.current = null;
        });

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousedown', () => isDrawing.current = true);
            document.removeEventListener('mouseup', () => isDrawing.current = false);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [socket]);

    return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;

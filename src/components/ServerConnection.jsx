import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Canvas from "./components/Canvas";

const ServerConnection = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        return () => newSocket.close();
    }, []);

    return (
        <div>
            <h1>Collaborative Canvas</h1>
            {socket && <Canvas socket={socket} />}
        </div>
    );git 
};

export default ServerConnection;

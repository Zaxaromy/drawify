import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Canvas from "./components/Canvas";
import ServerConnection from "./components/ServerConnection";

export default  function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<ServerConnection />} />
                <Route path='/src/components/Menu' element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}

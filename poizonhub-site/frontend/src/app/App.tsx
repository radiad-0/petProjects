import React from 'react'
import Login from "../pages/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "../pages/registration/Registration";
import Error from "../pages/error/Error";
import Main from "../pages/main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
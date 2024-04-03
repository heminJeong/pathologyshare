import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import NavBar from "./components/nav_bar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="signin" element={<Signin />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

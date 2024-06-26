import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import Signin from "./pages/Signin.js";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/signin" element={<Signin />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

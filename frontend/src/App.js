import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import Signin from "./pages/Signin.js";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

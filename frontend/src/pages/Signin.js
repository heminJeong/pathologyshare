import * as React from "react";

function Signin() {
    return (
        <div>
            <h1>Signin</h1>
            <form action="/signin" method="POST">
                <label>ID : </label>
                <input type="text" name="id"></input>
                <button type="submit">signin</button>
            </form>
        </div>
    );
}

export default Signin;

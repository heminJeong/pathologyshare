import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import TopBar from "../components/TopBar";

function Signin() {
    return (
        <Box>
            <TopBar />
            <Box component="form">
                <TextField required label="ID" variant="standard" />
                <TextField
                    required
                    label="PASSWORD"
                    type="password"
                    variant="standard"
                />
                <Button variant="contained">Sign in</Button>
            </Box>
            <Box component="form">
                <TextField required label="ID" variant="standard" />
                <TextField
                    required
                    label="PASSWORD"
                    type="password"
                    variant="standard"
                />
                <TextField
                    required
                    label="PASSWORD CONFIRM"
                    type="password"
                    variant="standard"
                />
                <Button variant="outlined">Sign Up</Button>
            </Box>
        </Box>
    );
}

export default Signin;

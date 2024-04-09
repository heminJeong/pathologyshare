import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

function Signin() {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={6} md={6}></Grid>
                <Grid item xs={6} md={6}>
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h1>Signin</h1>
                        <TextField
                            required
                            id="id"
                            label="ID"
                            variant="standard"
                        />
                        <TextField
                            id="pw"
                            label="Password"
                            type="password"
                            variant="standard"
                        />
                        <Button type="submit" variant="outlined">
                            signin
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Signin;

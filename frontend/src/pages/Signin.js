import * as React from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import TopBar from "../components/TopBar";

function Signin() {
    const [formData, setFormData] = React.useState({
        id: "",
        pw: "",
    });

    const marginx = 9;

    return (
        <Box>
            <TopBar />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box sx={{ backgroundColor: "#e2e2e2" }}></Box>
                </Grid>
                <Grid item xs>
                    <Box
                        component="div"
                        sx={{
                            justifyContent: "center",
                            alignContent: "center",
                            backgroundColor: "#e2e2e2",
                            height: "calc(100vh - 64px)",
                            flexDirection: "column",
                            display: "flex",
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                flexDirection: "column",
                                display: "flex",
                                height: "400px",
                            }}
                        >
                            <TextField
                                required
                                label="ID"
                                variant="standard"
                                sx={{ mx: marginx, my: 2 }}
                            />
                            <TextField
                                required
                                label="PASSWORD"
                                type="password"
                                variant="standard"
                                sx={{ mx: marginx, my: 2 }}
                            />
                            <Box
                                sx={{
                                    height: "48px",
                                    my: 2,
                                }}
                            />

                            <Button
                                variant="contained"
                                sx={{ mx: 8, my: 7, p: 1, Y: "200px" }}
                            >
                                Sign in
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs>
                    <Box
                        component="div"
                        sx={{
                            backgroundColor: "#e2e2e2",
                            height: "calc(100vh - 64px)",
                            justifyContent: "center",
                            flexDirection: "column",
                            display: "flex",
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                alignContent: "center",
                                flexDirection: "column",
                                display: "flex",
                                height: "400px",
                            }}
                        >
                            <TextField
                                required
                                label="ID"
                                variant="standard"
                                sx={{ mx: marginx, my: 2 }}
                            />
                            <TextField
                                required
                                label="PASSWORD"
                                type="password"
                                variant="standard"
                                sx={{ mx: marginx, my: 2 }}
                            />
                            <TextField
                                required
                                label="PASSWORD CONFIRM"
                                type="password"
                                variant="standard"
                                sx={{ mx: marginx, my: 2 }}
                            />
                            <Button
                                variant="outlined"
                                sx={{ mx: 8, my: 7, p: 1 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Signin;

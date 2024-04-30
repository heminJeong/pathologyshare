import * as React from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import TopBar from "../components/TopBar";
import axios from "axios";

function Signin() {
    const [signInFormData, setsignInFormData] = React.useState({
        siginInID: "",
        siginInPW: "",
    });

    const [signUpFormData, setSignUpFormData] = React.useState({
        signUpID: "",
        signUpPW1: "",
        signUpPW2: "",
    });

    const handleSignInInputChange = (e) => {
        const { name, value } = e.target;
        setsignInFormData({
            ...signInFormData,
            [name]: value,
        });
    };

    const handleSignUpInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({
            ...signUpFormData,
            [name]: value,
        });
    };

    const handleSignInSubmit = (e) => {
        axios
            .post("http://localhost:8000/api/signin/", {
                id: "id",
                pw: "pw",
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSignUpSubmit = (e) => {
        axios
            .post("http://localhost:8000/api/signup/", {
                id: "id",
                pw1: "pw1",
                pw2: "pw2",
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const textfield_marginx = 9;

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
                                name="siginInID"
                                value={signInFormData.id}
                                onChange={handleSignInInputChange}
                                sx={{ mx: textfield_marginx, my: 2 }}
                            />
                            <TextField
                                required
                                label="PASSWORD"
                                type="password"
                                variant="standard"
                                name="siginInPW"
                                value={signInFormData.pw}
                                onChange={handleSignInInputChange}
                                sx={{ mx: textfield_marginx, my: 2 }}
                            />
                            <Box
                                sx={{
                                    height: "48px",
                                    my: 2,
                                }}
                            />
                            <Button
                                variant="contained"
                                onClick={handleSignInSubmit}
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
                                name="signUpID"
                                value={signUpFormData.signUpID}
                                onChange={handleSignUpInputChange}
                                sx={{ mx: textfield_marginx, my: 2 }}
                            />
                            <TextField
                                required
                                label="PASSWORD"
                                type="password"
                                variant="standard"
                                name="signUpPW1"
                                value={signUpFormData.signUpPW1}
                                onChange={handleSignUpInputChange}
                                sx={{ mx: textfield_marginx, my: 2 }}
                            />
                            <TextField
                                required
                                label="PASSWORD CONFIRM"
                                type="password"
                                variant="standard"
                                name="signUpPW2"
                                value={signUpFormData.signUpPW2}
                                onChange={handleSignUpInputChange}
                                sx={{ mx: textfield_marginx, my: 2 }}
                            />
                            <Button
                                variant="outlined"
                                onClick={handleSignUpSubmit}
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

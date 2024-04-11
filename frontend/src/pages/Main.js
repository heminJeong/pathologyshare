import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GoogleLoginButton } from "react-social-login-buttons";

function Main() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mr: 10 }}
                    >
                        Pathshare
                    </Typography>
                    <GoogleLoginButton onClick={() => alert("Hello")} />
                </Toolbar>
            </AppBar>
            <Grid
                container
                justifyContent="center" // 가운데 정렬
                alignItems="center" // 세로 가운데 정렬
                style={{ height: `calc(100vh - 64px)` }} // 화면 높이 - AppBar 높이
            >
                <Grid item>
                    <Typography variant="h3" align="center">
                        Share for Better
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Main;

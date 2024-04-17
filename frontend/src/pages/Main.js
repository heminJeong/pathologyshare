import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TopBar from "../components/TopBar";

function Main() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TopBar />
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

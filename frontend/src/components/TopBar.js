import * as React from "react";
import { AppBar, Toolbar, Button, Typography, Link } from "@mui/material/";

function TopBar() {
    return (
        <div>
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link href="/" underline="none" color="inherit">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, mr: 10 }}
                        >
                            Pathshare
                        </Typography>
                    </Link>
                    <Link href="/signin" underline="none" color="inherit">
                        <Button variant="contatined">Sign in</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;

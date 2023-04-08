import {AppBar, Toolbar} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

function Header(){

    return (
            <AppBar position="static" sx={{backgroundColor: '#212121'}}>
                <Toolbar >
                    <Typography variant="h6" sx={{flexGrow : 1, textAlign: 'center' }} >
                        Mon Site
                    </Typography>
                </Toolbar>
            </AppBar>
    )

}

export default Header;

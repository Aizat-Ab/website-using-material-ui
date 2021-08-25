import { Badge } from '@material-ui/core';
import { AppBar, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                 <Grid container>
                      <Grid item >
                        <InputBase/>
                      </Grid>
                      <Grid item>

                      </Grid>
                      <Grid item >
                    <IconButton>
                        <Badge badgeContent={4} color='secondary'>
                            <NotificationsNoneIcon/>
                        </Badge> 
                        </IconButton>
                        <IconButton>
                        <Badge badgeContent={9} color='primary'>
                            <ChatBubbleOutlineIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                            <PowerSettingsNewIcon/>
                    </IconButton>
                      </Grid>
                 </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
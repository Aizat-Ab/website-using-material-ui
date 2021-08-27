import { Badge } from '@material-ui/core';
import { AppBar, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'#fff'
    },
    searchInput:{
        opacity:'0.6',
        padding:`0px ${theme.spacing(1)}px`,
        fontSize:'0.8rem',
        borderRadius:'5px',
        transition:'0.2s',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1)
        }
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                 <Grid container
                 alignItems='center'>
                      <Grid item >
                        <InputBase
                        className={classes.searchInput}
                        placeholder='Search topic'
                        startAdornment={<SearchIcon
                            fontSize='small'/>}
                        />
                      </Grid>
                      <Grid item sm></Grid>
                      <Grid item >
                    <IconButton>
                        <Badge badgeContent={4} color='secondary'>
                            <NotificationsNoneIcon fontSize='small'/>
                        </Badge> 
                        </IconButton>
                        <IconButton>
                        <Badge badgeContent={9} color='primary'>
                            <ChatBubbleOutlineIcon fontSize='small'/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                            <PowerSettingsNewIcon fontSize='small'/>
                    </IconButton>
                      </Grid>
                 </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header

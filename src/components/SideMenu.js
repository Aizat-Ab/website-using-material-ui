import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = {
    sideMenu:{
        display: 'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'320px',
        height:'100%',
        background:'black'
    }
}

const SideMenu = (props) => {
    const {classes} = props;
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(useStyles)(SideMenu)
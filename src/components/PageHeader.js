import { Card, Paper, Typography, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root:{
        background: '#fdfdff'
    },
    PageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(3)
    },
    pageIcon:{
         display:'inline-block',
         padding:theme.spacing(2),
         color: '#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    } 
}))

const PageHeader = (props) => {

    const { title, subTitle, icon} = props;
    const classes = useStyles()
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.PageHeader}>
            <Card className={classes.pageIcon}>
                {icon}
            </Card>
            <div className={classes.pageTitle }>
                <Typography
                variant='h6'
                component='div'>
                    {title}
                </Typography>
                <Typography
                variant='subtitle2'
                component='div'>
                    {subTitle}
                </Typography>
            </div>
            </div>
        </Paper>
    )
}

export default PageHeader

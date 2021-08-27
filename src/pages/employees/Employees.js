import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from "../../components/PageHeader";
import PeopleIcon from '@material-ui/icons/People';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const Employees = () => {
    const classes = useStyles();
    return (  
        <>
        <PageHeader
        title='Page Header'
        subTitle='Page description'
        icon={<PeopleIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
        <EmployeeForm/>
        </Paper> 
        </>
        
    )
}

export default Employees

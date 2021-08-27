import React, {useState} from 'react';
import { Grid, TextField, RadioGroup,FormControlLabel, FormControl, FormLabel,Radio } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';


const initialValues = {
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate: new Date(),
    isPermanent: false,
}

const EmployeeForm = () => {

    

    const {values, setValues, hadleInputChange} = useForm(initialValues);

    return (
            <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant='outlined'
                    label='Full name'
                    value={values.fullName}
                    name='fullName'
                    onChange={hadleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Email'
                    name='email'
                    value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                        name='gender'
                        name='email'
                        value={values.email}>
                            <FormControlLabel
                            value='male'
                            control={<Radio/>}
                            label='Male'/>
                            <FormControlLabel
                            value='female'
                            control={<Radio/>}
                            label='Female'/>
                            <FormControlLabel
                            value='other'
                            control={<Radio/>}
                            label='Other'/> 
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            </Form>
    )
}

export default EmployeeForm
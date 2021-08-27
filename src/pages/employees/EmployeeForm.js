import React from 'react';
import { Grid } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';
import Input from '../../components/controls/Input';
import RadioGrouped from '../../components/controls/RadioGrouped';
import Select from '../../components/controls/Select';
import * as employeeService  from '../../services/employeeService';
import Checkbox from '../../components/controls/Checkbox';
import Picker from '../../components/controls/Picker';
import {Button} from '../../components/controls/Button';

const genderItems = [ 
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'},
]


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
                    <Input
                    label='Full Name'
                    value={values.fullName}
                    name='fullName'
                    onChange={hadleInputChange}
                    />
                    <Input
                    label='Email'
                    value={values.email} 
                    name='email'
                    onChange={hadleInputChange}
                    /> 
                     <Input
                    label='Mobile'
                    value={values.mobile} 
                    name='mobile'
                    onChange={hadleInputChange}
                    /> 
                     <Input
                    label='City'
                    value={values.city} 
                    name='city'
                    onChange={hadleInputChange}
                    /> 
                </Grid>
                <Grid item xs={6}>
                    <RadioGrouped
                    name='gender'
                    label="Gender"
                    value={values.gender}
                    onChange={hadleInputChange}
                    items={genderItems}/>
                <Select
                name='departmentId'
                label="Department"
                value={values.departmentId}
                onChange={hadleInputChange}
                options={employeeService.getDepatmentCollection()}/>
                <Picker
                name='hireDate'
                label='Hire Date'
                value={values.hireDate} 
                onChange={hadleInputChange}
                />
                <Checkbox
                name='isPermanent'
                label='Permanent Employee'
                value={values.isPermanent}
                onChange={hadleInputChange}
                />
                <div>
                    <Button
                    type='submit'
                    text='Submit'
                    />
                    <Button
                    type='submit'
                    text='Reset'
                    color='default'
                    />
                </div>
                </Grid>
            </Grid>
            </Form>
    )
}

export default EmployeeForm
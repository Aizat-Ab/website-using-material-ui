import { TextField } from '@material-ui/core';
import React from 'react';

const Input = ({name, label, value, onChange}) => {


    return (
        <TextField
                    variant='outlined'
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    />
    )
}

export default Input;
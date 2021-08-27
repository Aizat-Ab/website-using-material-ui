import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core';


export default function Select({name, label, value, onChange, options}) {


    return (
        <FormControl
        variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                <MenuItem value=''>None</MenuItem>
                {options.map(item=>(<MenuItem key={item} value={item.id}>{item.title}</MenuItem>
                ))
                }
            </MuiSelect>
        </FormControl>
    )
}

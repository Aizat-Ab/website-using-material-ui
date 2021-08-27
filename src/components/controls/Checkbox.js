import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react';

const Checkbox = ({name, label,value, onChange}) => {

    const convertToDefEventPara = (name, value) =>({
        target:{
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel label={label}
            control={<MuiCheckbox
                name={name}
                color='primary'
                checked={value}
                onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
            />}>
            </FormControlLabel>
        </FormControl>
    )
}

export default Checkbox

import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup, Radio } from '@material-ui/core';
import React from 'react';

const RadioGrouped = ({name, label, value, onChange, items}) => {

    
    return (
        <FormControl>
                <FormLabel>{label}</FormLabel>
                        <MuiRadioGroup row
                        name={name}
                        value={value}
                        onChange={onChange}>
                            {items.map((item)=>(
                            <FormControlLabel
                            key={item.id}
                            value={items.id} 
                            control={<Radio/>}
                            label={item.title}/>
                            )) }
                        </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGrouped;

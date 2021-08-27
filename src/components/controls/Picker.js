import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

const Picker = ({name, label, value, onChange}) => {

    const convertToDefEventPara = (name, value) => ({ 
        target:{
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar variant='inline'
            inputVariant='outlined'
            name={name}
            label={label}
            format='MMM/dd/yyyy'
            value={value}
            onChange={date=>onChange(convertToDefEventPara(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}

export default Picker

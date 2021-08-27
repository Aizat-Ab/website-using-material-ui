import React from 'react';
import { makeStyles } from '@material-ui/core';


// const useForm = (initialValues) => {
    
//     const [values, setValues] = React.useState(initialValues);

//     const hadleInputChange = e => {
//         const {name, value} = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         })
//     }

//     return {
//         values,
//         setValues,
//         hadleInputChange
//     }
// }

// export default useForm;

export function useForm(initialValues) {
    const [values, setValues] = React.useState(initialValues);

    const hadleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        hadleInputChange
    }
}

const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    } 
}))

export function Form(props) {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    ) 
} 


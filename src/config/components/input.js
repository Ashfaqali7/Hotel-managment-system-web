import React from 'react'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const InputField = (props) => {
    const {label,type,required, value, onChange} = props;
    return (
        <>
            <TextField
                
                id="outlined-basic"
                value={value}
                onChange = {onChange}
                type={type}
                label={label}
                required={required}
                // defaultValue="Normal"
                variant="filled"
            />
        </>
    )
}

export default InputField
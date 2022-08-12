
import React from 'react'
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

const Buttons = (props) => {
  const {label,onClick,loading,disable, color} = props;

  return (
    <>
    <Button
    disable={disable || loading }
    onClick ={onClick}
    variant="outlined"
    color={color}
    >
    {loading && <CircularProgress/>}{label}
    </Button>
    </>
  )
}

export default Buttons
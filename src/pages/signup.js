import { Box, FormControl, Grid, Typography } from "@mui/material";
import {
  Link
} from "react-router-dom";
import React, { useState } from "react";
import Buttons from "../config/components/button";
import InputField from "../config/components/input";
import { SignInUser } from "../config/firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
   
 
  function Mysignup() {
    const [name,setName]=useState(null)
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [loader,setLoader]= useState(false)
  const navigate = useNavigate()

  const obj={
    name,
    email,
    password
  }
    const UserSignUP=()=>{
      console.log(obj);
      if(!email){
        alert("Email is required");
        return;
      };
      if(!password){
        alert("Password is Required");
        return;
      };
      setLoader(true)
      SignInUser(obj).then((res)=>{
        setLoader(false)
        alert("successfull data Saved");
        navigate("/login")
      }).catch((err)=>{
        setLoader(false)
        alert(err)
      })
    }
  return (
    <>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={4}>
          <FormControl
            sx={{
              padding: 4,
              margin: 3,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Box>
              <Typography variant="h4" color="success">
                SignUp
              </Typography>
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField fullwidth type="text" onChange={(e)=>{setName(e.target.value)}} label="Enter Name" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField type="email" onChange={(e)=>{setEmail(e.target.value)}} label="Enter Email" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField type="password"onChange={(e)=>{setPassword(e.target.value)}} label="Enter Password" />
            </Box>
            <Box sx={{margin:2}}>Already SignUp  <Link to="login">Login</Link></Box>
            <Buttons onClick={UserSignUP} loading={loader} label="SignUp" />
          </FormControl>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </>
  );
}

export default Mysignup;

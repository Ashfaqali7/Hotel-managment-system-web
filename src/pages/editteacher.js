import { Box, FormControl, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Buttons from "../config/components/button";
import InputField from "../config/components/input";
import { useNavigate,useParams } from "react-router-dom";
import { getData, sendData } from "../config/firebase/firebasemethod";
   
 
  function EditTeacher() {
    const [name,setName]=useState(null);
  const [email,setEmail]=useState(null);
  const [contact,setContact]=useState(null);
  const [cnic,setCnic]=useState(null);
  const [section,setSection]=useState(null);
  const [loader,setLoader]= useState(false);
  const navigate = useNavigate();
  const Param = useParams();
  const obj={
    name,
    email,
    contact,
    cnic,
    section
  };
  const getTeacher=()=>{
    getData("teacher",Param.id).then((success)=>{
        setName(success.name);
        setEmail(success.email);
        setContact(success.contact);
        setCnic(success.cnic);
        setSection(success.ection);
    }).catch((err)=>{
        console.log(err)
    })
  }


  useEffect(()=>{
    getTeacher();
  },[])
    const SubmitTeacher=()=>{
        
        sendData(obj,"teacher",Param.id).then((res)=>{
            console.log("Data EDited")
            navigate("/teacher")
        }).catch((err)=>{
            console.log("err")
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
                Edit Teacher
              </Typography>
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField fullwidth type="text" onChange={(e)=>{setName(e.target.value)}} label="Enter Name" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField type="email" onChange={(e)=>{setEmail(e.target.value)}} label="Enter Email" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField type="number"onChange={(e)=>{setContact(e.target.value)}} label="Enter Contact" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField type="number"onChange={(e)=>{setCnic(e.target.value)}} label="Enter CNIC" />
            </Box>
            <Box sx={{ padding: 1 }}>
              <InputField type="text"onChange={(e)=>{setSection(e.target.value)}} label="Enter Class" />
            </Box>
            
            <Buttons onClick={SubmitTeacher} loading={loader} label="Submit" />
          </FormControl>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </>
  );
}

export default EditTeacher;

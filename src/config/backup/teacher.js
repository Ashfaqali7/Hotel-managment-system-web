import { Grid } from '@mui/material'
// import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import TeacherCard from '../config/components/cardteacher'
import { getData,deletData} from '../config/firebase/firebasemethod';
import { useNavigate } from "react-router-dom";
function Teacher() {
    const [teacher,setTeacher]=useState([]);
    const navigate = useNavigate();
const getTeacher =()=>{
    console.log('..........')
    getData("teacher").then((success)=>{
        setTeacher(success);
        console.log("successfully get");
    }).catch((err)=>{
        console.log(err)
    })
};
const deletTeacher=(data)=>{
    deletData("Teacher",data).then((success)=>{
        console.log("Data Deletad");
        getTeacher();
    }).catch((err)=>{
        console.log("err")
    });
};

const editTeacher=(data)=>{
    navigate(`/editTeacher/${data}`)
}

    useEffect(() => {
        getTeacher();
    },[]);
  return (
    <>
    <Grid >
        <Grid xl={12}></Grid>
        {teacher.map( function (data,Index) {
            return (<TeacherCard data={data} click={()=>deletTeacher(data.id)} clickEdit={()=>editTeacher(data.id)} index={Index} key={Index}/>)
        })}    
    </Grid>
    </>
  )
}

export default Teacher;

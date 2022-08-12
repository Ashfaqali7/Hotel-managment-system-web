
import React, { useEffect, useState } from "react";
import { deletData, getData } from "../config/firebase/firebasemethod";

function MyAdmin() {
  const [user, setUser] = useState([]);
  const getTeacher = () => {
    console.log("..........");
    getData("user")
      .then((success) => {
        setUser(success);
        console.log("successfully get");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletUser=(data)=>{
    deletData("user",data).then((success)=>{
        console.log("Data Deletad");
        getTeacher();
    }).catch((err)=>{
        console.log("err")
    });
};

  useEffect(() => {
    getTeacher();
  }, []);
  return (
    <>
      <div
        style={{
          margin: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1>Booking Details</h1>
      </div>
      <div className="row">
        {user.map((e, i) => {
          return (
            <div
            key={i}
              className="card col-auto"
              style={{
                width: "18rem",
                margin: "20px",
              }}
            >
              <div className="card-header bg-info ">order Details</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Hotel Name :{e.hname}</li>
                <li className="list-group-item">Name :{e.name}</li>
                <li className="list-group-item">Room Type :{e.room}</li>
                <li className="list-group-item">Contact :{e.contact}</li>
                <li className="list-group-item">Place :{e.place}</li>
                <li className="list-group-item">Arrival :{e.ondate}</li>
                <li className="list-group-item">leave :{e.leftdate}</li>
                <li className="list-group-item">No Of Guest :{e.numberofg}</li>
                <li className="list-group-item">Price :${e.rup}</li>
              </ul>
              <div className="btn d-flex justify-content-center my-3  ">
                  <button  onClick={()=>deletUser(e.id)} className="bg-info border-0 rounded px-5 py-2 w-100">Delete</button>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyAdmin;
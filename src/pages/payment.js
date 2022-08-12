import { CloudDone, Height } from "@mui/icons-material";
import { FormControl, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "../config/components/button";
import InputField from "../config/components/input";
import { sendData } from "../config/firebase/firebasemethod";
import images2 from "../images/hotel2.jpg";

function MyPayment() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState(null);
  const [place, setPlace] = useState(null);
  const [contact, setContact] = useState(null);
  const [ondate, setOndate] = useState(null);
  const [leftdate, setLeftdate] = useState(null);
  const [numberofg, setNumberofg] = useState(null);
  const [room, setRoom] = useState(null);
  const [rup, setRup] = useState(null);
  const [hname, setHname] = useState(null);

  let romdata = location.state;
  let mydata = romdata.room;
  let price = romdata.sum;
  let HotelName = romdata.hotelN;
  useEffect(() => {
    setRoom(mydata);
    setRup(price);
    setHname(HotelName);
  }, []);
  console.log(room);

  const obj = {
    name,
    room,
    rup,
    hname,
    place,
    contact,
    ondate,
    leftdate,
    numberofg,
  };
  console.log(obj);
  const UserDetails = () => {
    console.log(obj);
    sendData(obj, "user")
      .then((res) => {
        console.log("success");
        navigate("/cardpay");
      })
      .catch((err) => {
        console.log("err");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 shadow">
            <div className="cardLast border rounded mt-5 ">
              <div className="header">
                <div className="img">
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "fill",
                    }}
                    src={images2}
                    alt="anoo"
                    className="img-thumbnail"
                  />
                </div>
                <div className="heading text-center">
                  <h5>Booking Details </h5>
                  <h5>{hname}</h5>
                </div>
                <hr />
              </div>
              <div className="body">
                <div className="hotelName ps-2">
                  <h5 className="text-info">{romdata.room}</h5>
                  <p>87324 Pennsylvania Ave</p>
                  <p>Portland, OR 10923</p>
                </div>
                <div className="pridate ps-2 d-flex justify-content-around">
                  <div className="price">
                    <h5>${romdata.sum}</h5>
                    <parent>Purchased</parent>
                  </div>
                </div>
              </div>
            </div>
            <div className=" ps-3 mt-5">
              <div className="inputBox ">
                <h5>Your Name</h5>
                <input
                  className="inputMain border"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="inputBox">
                <h5>where to</h5>
                <input
                  className="inputMain border"
                  onChange={(e) => {
                    setPlace(e.target.value);
                  }}
                  type="text"
                  placeholder="place want to go"
                />
              </div>
              <div className="inputBox">
                <h5>how many</h5>
                <input
                  className="inputMain border"
                  onChange={(e) => {
                    setNumberofg(e.target.value);
                  }}
                  type="number"
                  placeholder="number of guests"
                />
              </div>
              <div className="inputBox">
                <h5>arrivals</h5>
                <input
                  className="inputMain border"
                  onChange={(e) => {
                    setOndate(e.target.value);
                  }}
                  type="date"
                />
              </div>
              <div className="inputBox">
                <h5>leaving</h5>
                <input
                  className="inputMain border"
                  onChange={(e) => {
                    setLeftdate(e.target.value);
                  }}
                  type="date"
                />
              </div>
              <div className="inputBox">
                <h5>contact</h5>
                <input
                  className="inputMain border"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  type="number"
                  placeholder="Whatsapp or other"
                />
              </div>
              <div className="btn d-flex justify-content-center my-3  ">
                <button
                  onClick={UserDetails}
                  className="bg-info border-0 rounded px-5 py-2 w-100"
                >
                  continue
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

//   navigate("/cardpay")
export default MyPayment;

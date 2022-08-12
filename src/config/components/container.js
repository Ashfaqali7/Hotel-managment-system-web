import Buttons from "./button";
import BodyShorthandExample from "./headingCard";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LocalParkingRoundedIcon from "@mui/icons-material/LocalParkingRounded";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";

// import hotel3 from "../../hotel3.jpg"

function DisabledExample(props) {
  const navigate = useNavigate();
  const {title,price,rating,images}=props;
  const GoPrice=()=>{
    alert("booking page");
    navigate("/features",{
      state:{
        title,
        price,
        rating
      }
    });
  };
  return (
    <> 
    
      <div className="row">
        <div className="">
          <div className="container border mt-2 py-4 shadowSame">
            <div className="mainBodyCard">
              <div className="headerCard text-center">
                <h3 className="text-info m-5  ">{title}</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="cardImage1">
                    <img
                    src="../../hotel3.jpg"
                      width={100}
                      alt="cah"
                    />
                  </div>
                  <div className="rating text-info">
                    <div className="CardIcon">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                    </div>
                    <div>
                      <h1>{rating}</h1>
                    </div>
                    <div>
                      {/* <h5>${price} per day</h5> */}
                      <Buttons label={price}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <h3 className="text-info mb-5 text-center"></h3>
                  <div className="cardBodyDetail">
                    <h4>Popular amenities</h4>
                    <div className="d-flex">
                      <ul className="cardList p-1">
                        <li className="p-3">
                          <PoolIcon />
                          Pool
                        </li>
                        <li className="p-3">
                          <WifiIcon />
                          Free WiFi
                        </li>
                        <li className="p-3">
                          <EmojiFoodBeverageOutlinedIcon />
                          BreakFast Included
                        </li>
                      </ul>
                      <ul className="cardList">
                        <li className="p-3">
                          <LocalParkingRoundedIcon />
                          Parking
                        </li>
                        <li className="p-3">
                          <AirportShuttleOutlinedIcon />
                          Free AirPort Shuttle
                        </li>
                        <li className="p-3">
                          <AcUnitIcon />
                          Air Condition
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <Buttons onClick={GoPrice} label="Book Now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisabledExample;


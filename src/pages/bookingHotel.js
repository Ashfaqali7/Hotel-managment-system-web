import React from "react";
import MyImageList from "../config/components/imagesCardComp";
import StarIcon from "@mui/icons-material/Star";
import MyAppBar from "../config/components/appBar";
import BookingForm from "../config/components/booking";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LocalParkingRoundedIcon from "@mui/icons-material/LocalParkingRounded";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Mypricing from "./pricing";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function BookingHotel(props) {
  const navigation = useNavigate()
  const location = useLocation()
  const data = location.state
  
console.log(data)
  return (
    <>
      <div className="pb-2">
        <MyAppBar />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mt-4">
            <BookingForm plc ={data.title}/>
            <div className="mapHotel mt-3 shadow border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.1960299508473!2d76.33308831475567!3d35.15173156643682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e4a9c38e9d5eaf%3A0x1891625118cb6829!2sSerena%20Khaplu%20Palace!5e0!3m2!1sen!2s!4v1657981773627!5m2!1sen!2s"
                width="100%"
                height="180"
                // sx={{boxShadow:"10px 10px 0px 10px rgba(0, 0, 0, 0.3)"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-8">
            <h1>
              {data.title} <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </h1>
            <p>{data.price}</p>
            <p>Denis Khaplu Bala Khaplu Ghanche Gilgit Baltistan</p>
            <MyImageList />
          </div>
        </div>
      </div>
      <div className="mainDiscription">
        <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>
              Get the celebrity treatment with xorle class servive at Serene
              Khaplu.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              qui, minima cumque saepe a soluta eaque dolorem eius aspernatur
              laudantium molestiae quod reprehenderit omnis ut similique vero
              repellendus quo dolor animi provident? Cupiditate deleniti
              adipisci delectus vero incidunt quia facere, nostrum mollitia
              quasi recusandae distinctio et, dolorum assumenda dignissimos
              omnis!
            </p>
            <p>
            laudantium molestiae quod reprehenderit omnis ut similique vero
              repellendus quo dolor animi provident? Cupiditate deleniti
              adipisci delectus vero incidunt quia facere, nostrum mollitia
              quasi recusandae distinctio et, dolorum assumenda dignissimos
              omnis!
            </p>
            <p>adipisci delectus vero incidunt quia facere, nostrum mollitia
              quasi recusandae distinctio et, dolorum assumenda dignissimos
              omnis!</p>
              <p>adipisci delectus vero incidunt quia facere, nostrum mollitia</p>
          </div>
          <div className="col-md-3">
          <div className="ms-2">
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
          </div>
        </div>
        </div>
      </div>
     <div className="pricingOfRooms">
      
       
      </div>
    </>
  );
}

export default BookingHotel;

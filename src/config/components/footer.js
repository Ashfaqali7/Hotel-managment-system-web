import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function MyFooter() {
  return (
    <>
      <div className="footer">
        <div className="row pt-3">
          <div className="col-4 ps-4">
            <h3>About us</h3>
            <p className="footerText">ksdljf klv;ksdj .ldh dh jwhejiwdh wiehjiaw l <a href="">See more..</a></p>
          </div>
          <div className="col-4">
            <ul className="cardList">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">booking</a>
              </li>
              <li>
                <a href="">pricing</a>
              </li>
            </ul>
          </div>
          <div className="col-4 p-3">
            <FacebookIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />
            <WhatsAppIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFooter;

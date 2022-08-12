import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import MyAppBar from "../config/components/appBar";
import CarouselFadeExample from "../config/components/carousel";
import DisabledExample from "../config/components/container";
import MyFooter from "../config/components/footer";
// import KitchenSinkExample from '../config/components/origCard'
// import ControlledCarousel from '../config/components/carousel'
// import MyDrawer from '../config/components/drawer'
import imagesCard from "../config/components/images";
// import hotel3 from '../images/hotel3'
function Myhome() {
  return (
    <>
      <div className="mainBodyOfHome">
        {/* <MyDrawer/> */}
        <div>
          <MyAppBar />
        </div>
        <div className="container ">
          <div className="mt-2">
            <CarouselFadeExample />
          </div>
          <div>
            <h3 sx={{}}>Hotels And Rates</h3>
            {/* {
        imagesCard && imagesCard.map((props)=>{
          
        })
      } */}

            <DisabledExample
              title="Serena Hotel"
              disable="disabled"
              // image={hotel3}
              price=" $120 / per day"
              rating="4/5"
            />
            <DisabledExample
              title="KaraKaram Hotel"
              price="130"
              rating="4.4/5"
            />
            <DisabledExample 
            title="Khaplu Hotel"
             price="140" 
             rating="4.5/5"
            />
            <DisabledExample 
            title="Lynx Motel" 
            price="150" 
            rating="4.7/5" 
            />
            <DisabledExample 
            title="Khaplu Palace" 
            price="170" 
            rating="4.8/5" 
            />
            <DisabledExample 
            title="Hundily Palace" 
            price="180" 
            rating="4.9/5" 
            />
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default Myhome;

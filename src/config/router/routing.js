import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Mysignup,Mylogin,Myhome,BookingHotel,Mypricing,MyPayment,CardPayment,AllPricing,MyAdmin} from "./screen";

export default function MyRouting() {
  return (
    <Router>
        <Routes>
        <Route path="signup/*" element={<Mysignup/>}/>
        <Route path="login" element={<Mylogin/>}/>
        <Route path="/" element={<Myhome/>}/>
        <Route path="/features" element={<BookingHotel/>}/>
        <Route path="/pricing" element={<AllPricing/>}/>
        <Route path="/payment" element={<MyPayment/>}/>
        <Route path="/cardpay" element={<CardPayment/>}/>
        <Route path="/admin" element={<MyAdmin/>}/>
            </Routes> 
    </Router>
  );
}


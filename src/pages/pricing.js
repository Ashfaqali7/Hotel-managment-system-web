import React from 'react'
import { useLocation } from 'react-router-dom'
import Mypricing from '../config/components/pricepro'

function AllPricing(props) {
  const location = useLocation()
 
  return (
    <>
      <Mypricing hotelN="Serena" price="120"room="Double Dulex"/>
      <Mypricing  hotelN="karakurm" price="550"room="Double Dulex"/>
      <Mypricing  hotelN="lynex Motel" price="456"room="Double Dulex"/>
      <Mypricing  hotelN="Khaplu Place" price="366"room="Double Dulex"/>
      <Mypricing  hotelN="Khaplu" price="233"room="Double Dulex"/>
      <Mypricing  hotelN="Anwar" price="563"room="Double Dulexl"/>
      <Mypricing  hotelN="ZapThung" price="5767"room="bDouble Dulex"/>
    </>
  )
}

export default AllPricing

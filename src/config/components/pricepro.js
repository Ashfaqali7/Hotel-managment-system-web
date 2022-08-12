import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
// import Buttons from '../config/components/button';

function Mypricing(props) {
  let {price,room,sum, hotelN}=props
  const [num, setNum] = useState(0);
  const navigate = useNavigate()
  const Payment=()=>{
    navigate("/payment",{
        state:{
            room,
            sum,
            hotelN
        }
    })
  }
  sum = price*num
  const SubNum = () => {
    setNum(num - 1);
  };
  const AddNum = () => {
    setNum(num+ 1);
  };
   
  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr className="bg-info text-light">
              <th scope="row">sleeps</th>
              <th colspan="2">Room type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <PersonIcon />
                <PersonIcon />
              </th>
              <td colspan="2">
                <h5>{hotelN}</h5>
                <h6>{room}</h6>
              </td>
              <td> ${price * num}</td>
              <td>
                <button
                  onClick={SubNum}
                  className="border-0 rounded-circle bg-info me-3 px-2"
                >
                  -
                </button>
                {num}
                <button
                  onClick={AddNum}
                  className="border-0 rounded-circle bg-info ms-3"
                >
                  +
                </button>
                <button onClick={Payment} className="border-0 bg-info ms-2 text-white rounded-pill p-1">book Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Mypricing;

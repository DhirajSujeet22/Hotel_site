import React from "react";
import "../Style/Maincon3.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import com_logo from "../Image/compny_logo.png"

function Maincon3() {
  return (
    <>
    <div className="maincon3_container">
      <div className="maincon3_container_subcon1">
        <h4>Contact Us</h4>
        <p>ADDRESS Bangla Sahib Road, Connaught Place,</p>
        <p>New Delhi - 110001, India</p>
        <p>PHONE +91 11 42500200</p>
        <p>FAX +91 11 42500300</p>

        <p>E-MAIL info@hotelmetdelhi.com</p>
      </div>
      <div className="maincon3_container_subcon2">
        <div>
          <h4 className="text-left mb-0">Follow Us</h4>
          <div className="maincon3_container_subcon2_subcon1">
            <div className="maincon3_icon1" >
                <FaFacebookF/>
            </div>
            <div className="maincon3_icon2">
            <BsTwitterX />
            </div>
            <div className="maincon3_icon3">
            <MdInsertPhoto />
            </div>

          </div>
        </div>
      </div>
    </div>
    <div style={{height:"10rem"}}>
        <img src={com_logo} alt="image not load" style={{width:"100%",height:"10rem"}} />
    </div>
    </>
  );
}

export default Maincon3;

import React from 'react';
import "../Style/Footer.css";
import flogo from  "../Image/flogo.png"
function Footer() {
  return (
    <div className='footer_container'>
        <div className='footer_container_subcontainer1'>
            <p className='mt-3'>
                <span>About Us</span> | <span>Contact Us</span> | <span>Awards</span> | <span>Gallery</span> | <span>Guest Reviews</span> | <span>Careers</span> | <span>News</span> | <span>Locations</span> | <span>Locations</span> | <span>Terms of Use</span> | <span>E-Brochure</span>
            </p>
            <p className='w-100 text-left pl-4'>© The Radiant Retreats & Spa 2018</p>
        </div>
        <div className='footer_container_subcontainer2'>
            <div>
            <img className='mt-3' src={flogo} alt="image not load" style={{width:"75%",borderRadius:"1rem"}} />

            <p className='mt-3'>Designed & Developed by <a href='https://www.kanakdrishtiinfotec.in/' target='_blank'>Kanak Drishti Pvt. Ltd.</a>
            </p>
            </div>
        </div>

    </div>
  )
}

export default Footer
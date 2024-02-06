import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../Style/Maincon.css";
import Maincon1 from './Maincon1';

function Maincon() {
  return (
    <div className='maincon_container'>
        <Carousel slide={false} className="carousel" controls={false}>
        <Carousel.Item interval={1500}>
        <div className="carousel_div3">
        <div className="carousel_div3_subcon1">
        <h1>Family Bonding,</h1>
            <h1>Global Memories</h1>
            <p>Create family memories that span the globe. Our international family travel plans cater to all ages, ensuring everyone in your family has an unforgettable and enriching experience.</p>

        </div>
          <div className="carousel_div3_subcon2">

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div className="carousel_div1">
          <div className="carousel_div1_subcon1">
            
            <h1>Explore</h1>
            <h1>the World</h1>
            <h1>with Us</h1>
            <p>Embark on a journey beyond borders with our curated international travel plans. Discover exotic destinations, diverse cultures, and create memories that last a lifetime.</p>

          </div>
          <div className="carousel_div1_subcon2">

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div className="carousel_div2">
        <div className="carousel_div2_subcon1">
            <h1>Discover Your </h1>
            <h1>Own Backyard</h1>
            <p>Uncover the hidden gems within your country. Our domestic travel plans promise adventure, relaxation, and a chance to explore the beauty in your own backyard.</p>
        </div>
          <div className="carousel_div2_subcon2">

          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
    <Maincon1 />
    </div>
  )
}

export default Maincon
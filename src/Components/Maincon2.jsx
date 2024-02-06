import React from "react";
import Maincon3 from "./Maincon3";

function Maincon2() {
  return (
    <>
    <div className="maincon2_container">
      <div className="heading mt-2">
        <h1
          style={{
            fontWeight: "normal",
            color: "navy",
            fontFamily: "-moz-initial",
          }}
          >
          Radiant Retreats
        </h1>
        <p style={{ color: "brown" }}>5 STAR DELUXE HOTEL</p>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{ width: "90%" }}>
          <p style={{ fontSize: "1.2rem", color: "rgba(0, 0, 0, 0.411)" }}>
            Radiant Retreats & Spa continue to follow the highest standards of
            cleanliness and hygiene, and in keeping with World Health
            Organization guidelines, to mitigate the risks associated with the
            coronavirus.{" "}
            <span style={{ color: "red", cursor: "pointer" }}>Click Here</span>{" "}
            to know more.
          </p>

          <p style={{ fontSize: "1.2rem", color: "rgba(0, 0, 0, 0.411)" }}>
            Radiant Retreats, is a Five Star Deluxe full service hotel is
            located in the heart of the business and commercial hub of New
            Delhi, and provides easy access to most of the corporate and
            financial centres, ministries, embassies and the International Trade
            Fair grounds. Radiant Retreats is the perfect destination for an
            international traveler looking for easy access to doing business in
            New Delhi. This urban oasis with its luxurious ambiance and lush
            landscaping is an experience in itself. Each of iculously designed
            guest rooms and suites at the hotel features personalized comfort,
            luxury and all the necessary amenities to satisfy the modern
            discerning traveler.
          </p>

          <p style={{ fontSize: "1.2rem", color: "rgba(0, 0, 0, 0.411)" }}>
            Radiant Retreats houses renowned restaurants to mesmerize guests
            with eclectic options to choose from distinctive dining and wining
            experiences. To the global gourmet, Radiant Retreats offers the
            award winning Sakura, India's first authentic Japanese restaurant,
            Chutney, Bar + Tandoor, offering dinners an indigenous fusion of
            pan–Indian cuisine, Zing, the all-day world cuisine restaurant
            featuring an international platter set to tantalize the taste buds.
            In addition, Radiant Retreats has a full service Business Center,
            Club Lounge, stylish Banquet Halls and Meeting Venues, Health Spa
            (neoVeda Spa) with Swimming Pool to provide the extras that our
            corporate business traveler expects.
          </p>
          <p
            style={{
              color: "red",
              fontSize: "1.2rem",
              cursor: "pointer",
              margin: "0rem",
              padding: "0rem",
            }}
            >
            Read more
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2294077321167!2d77.37749477409382!3d28.622885784521202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5acd86d2d77%3A0x34955dbaf07baf15!2sKanak%20Drishti%20Infotech%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1707201159946!5m2!1sen!2sin"
        style={{ border: 0, width: "100%", height: "20rem", marginTop: "1rem" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
    <Maincon3 />
        </>
  );
}

export default Maincon2;

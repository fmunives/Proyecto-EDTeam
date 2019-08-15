import React from "react";

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://images.pexels.com/photos/2763188/pexels-photo-2763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="banner"
        />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Welcome to EDTeam with React </p>
          <p> Start studying</p>
          <a href="https://ed.team" className="button">
            Let's go
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Banner;

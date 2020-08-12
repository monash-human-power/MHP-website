import React from "react";

// TODO: remove these and put something more permanent
import MHP_green_crosshair from "../../images/Group 4.svg";
import MHP_bike_graphic from "../../images/outter_bike.png";

const MainGraphic = () => (
  <div
    className="container-fluid py-5"
    style={{
      background: `repeat center/50px url(${MHP_green_crosshair}), black`,
    }}
  >
    <div className="row justify-content-center pt-4 mt-4">
      <img src={MHP_bike_graphic} alt="MHP bike graphic" />
    </div>

    <div className="row justify-content-center">
      <h1
        style={{
          color: "white",
          backgroundColor: "black",
          textAlign: "center",
        }}
        className="p-2 m-3"
      >
        MONASH HUMAN POWER
      </h1>
    </div>
  </div>
);

export default MainGraphic;

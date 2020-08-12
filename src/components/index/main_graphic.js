import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

// TODO: remove these and put something more permanent
import MHP_green_crosshair from "../../images/crosshair.svg";
import MHP_bike_graphic from "../../images/outter_bike.png";

const Heading = styled.h1`
  color: white;
  text-align: center;
`;

const CrosshairContainer = styled.div`
  background: repeat center/50px url(${MHP_green_crosshair}), black;
`;

const MainGraphic = ({ image, heading }) => (
  <CrosshairContainer className="container-fluid py-5">
    {/* pt-4 mt-4 ensures that the graphic doesn't hit the header */}
    <div className="row justify-content-center pt-4 mt-4">
      {/* Bike graphic */}
      <div className="col-md-12">
        <Img fluid={image} style={{ display: "block", margin: "auto" }} />
      </div>

      {/* Heading text */}
      <div className="col-md-12">
        <Heading className="p-2 m-3">
          <span style={{ backgroundColor: "black" }}>{heading}</span>
        </Heading>
      </div>
    </div>
  </CrosshairContainer>
);

export default MainGraphic;

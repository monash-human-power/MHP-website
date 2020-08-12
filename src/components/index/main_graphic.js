import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

// TODO: remove these and put something more permanent (changeable)
import MHP_green_crosshair from "../../images/crosshair.svg";

const CrosshairContainer = styled.div`
  background: repeat center/50px url(${MHP_green_crosshair}), black;
`;

const Heading = styled.h1`
  color: white;
  text-align: center;
`;

const CentreImage = styled(Img)`
  display: block;
  margin: auto;
`;

const BlackBackground = styled.span`
  background-color: var(--MHP-black);
`;

const MainGraphic = ({ image, heading }) => (
  <CrosshairContainer className="container-fluid pt-5 pb-2">
    {/* pt-4 mt-4 ensures that the graphic doesn't hit the header */}
    <div className="row justify-content-center pt-4 mt-4">
      {/* Bike graphic */}
      <div className="col-md-12">
        <CentreImage fluid={image} />
      </div>

      {/* Heading text */}
      <div className="col-md-12">
        <Heading className="p-2 m-3">
          <BlackBackground>{heading}</BlackBackground>
        </Heading>
      </div>
    </div>
  </CrosshairContainer>
);

export default MainGraphic;

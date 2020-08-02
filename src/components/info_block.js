import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Button from "./button";

const InfoHeading = styled.h2`
  &::before {
    content: "×";
    color: var(--MHP-purple);
    padding-right: 10px;
  }
`;

//

const InfoBlock = ({
  heading,
  description,
  buttonText,
  image,
  href,
  reverseOrder,
}) => (
  // col order-first and col order-last sets the order of the components
  <div className="row my-3">
    {/* Text component */}
    <div className={`col-lg ${reverseOrder ? "order-lg-2 order-xs-1" : ""} `}>
      <InfoHeading> {heading} </InfoHeading>
      <p> {description} </p>

      {/* Button component */}
      <div className="row">
        <div className="col-md-8">
          <Button href={href}> {buttonText} </Button>
        </div>
      </div>
    </div>

    {/* Image component */}
    <div
      className={`col-lg ${reverseOrder ? "order-lg-1 order-xs-2" : ""} `}
      style={{ height: 500, border: "red solid 2px" }}
    >
      {/* TODO: insert real image */}
      image
    </div>
  </div>
);

InfoBlock.propTypes = {
  heading: propTypes.string,
  description: propTypes.string,
  buttonText: propTypes.string,
  href: propTypes.string,
  reverseOrder: propTypes.bool,
};

InfoBlock.defaultProps = {
  heading: "Heading example",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText: "Example Button Text",
  href: "/",
  reverseOrder: false,
  image: "NNED OT FAJKSASDKLA",
};

export default InfoBlock;

import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

import Button from "./button";

const InfoHeading = styled.h2`
  &::before {
    content: "×";
    color: var(--MHP-purple);
    padding-right: 10px;
  }
`;

const InfoBlock = ({
  heading,
  description,
  buttonText,
  image,
  href,
  reverseOrder,
  id,
}) => (
  <div className="row pt-3 mb-5" id={id}>
    {/* Text component */}
    {console.log(buttonText)}{" "}
    <div className={`col-md my-3 ${reverseOrder && "order-md-2 order-xs-1"} `}>
      <InfoHeading> {heading} </InfoHeading>
      <p> {description} </p>

      {/* Button component */}
      <div className="row">
        <div className="col-md-8">
          {buttonText !== "" && buttonText !== null && (
            <Button href={href}> {buttonText} </Button>
          )}
        </div>
      </div>
    </div>
    {/* Image component */}
    <div className={`col-md mb-5 ${reverseOrder && "order-md-1 order-xs-2"} `}>
      <Img fluid={image} />
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
  heading: "",
  description: "",
  buttonText: "",
  href: "/",
  reverseOrder: false,
};

export default InfoBlock;

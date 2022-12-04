import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import Button from "./button";

const InfoHeading = styled.h2`
  &::before {
    content: "◼";
    color: var(--MHP-purple-2);
    padding-right: 10px;
  }
`;

const InfoBlock = ({
  heading,
  description,
  image,
  imageAlt = "",
  buttonText,
  href,
  buttonText2 = "",
  href2 = "",
  reverseOrder,
  id,
}) => (
  <div className="row pt-3 mb-5 mt-3" id={id} name={encodeURI(heading)}>
    {/* Text component */}
    <div className={`col-md ${reverseOrder && "order-md-2 order-xs-1"} `}>
      <InfoHeading> {heading} </InfoHeading>
      <p> {description} </p>

      {/* Button component */}
      <div className="row">
        <div className="col-md-8 mb-3">
          {buttonText !== "" && buttonText !== null && (
            <Button href={href}> {buttonText} </Button>
          )}
          {/* TODO: fix this as it is a big hack to get another button into this component */}
          {buttonText2 !== "" && buttonText2 !== null && (
            <Button href={href2}> {buttonText2} </Button>
          )}
        </div>
      </div>
    </div>

    {/* Image component */}
    <div className={`col-md ${reverseOrder && "order-md-1 order-xs-2"} `}>
      <GatsbyImage image={image} alt={imageAlt} />
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

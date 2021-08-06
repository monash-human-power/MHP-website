import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import Link from "./link";

const universalButtonStyle = `
  /* Always use uppercase text */
  text-transform: uppercase;
  font-weight: bold;

  /* Remove bootstrap border and radius */
  border: 0px;
  border-radius 0px;

  color: var(--MHP-white) !important;
  background-color: var(--MHP-purple);
  transition: 0.1s;

  &:hover {
    /* Slightly darker purple */
    transition: 0.3s;
    background-color: #37279e;
  } 
`;

const SubmitButton = styled(Link)`
  ${universalButtonStyle}
`;
const RealButton = styled.button`
  ${universalButtonStyle}
`;

// Fake JS enum to ensure only certain types are used
const BUTTON_TYPES = { button: "button", submit: "submit" };

const Button = ({ children, href, type }) => {
  if (type === BUTTON_TYPES.button) {
    return (
      <SubmitButton className="btn btn-block" to={href}>
        {children}
      </SubmitButton>
    );
  } else if (type === BUTTON_TYPES.submit) {
    return (
      <RealButton className="btn btn-block" type="submit">
        {children}
      </RealButton>
    );
  } else {
    throw Error(
      `The type attribute specified is not a valid BUTTON_TYPES such as [${Object.keys(
        BUTTON_TYPES
      )}]`
    );
  }
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  href: propTypes.string,
  type: propTypes.oneOf(Object.keys(BUTTON_TYPES)),
};

Button.defaultProps = {
  children: "",
  type: BUTTON_TYPES.button,
};

export default Button;

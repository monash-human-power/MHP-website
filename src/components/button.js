import React from "react"
import styled from "styled-components"
import propTypes from "prop-types"

import Link from "./link"

const ButtonLink = styled(Link)`
/* Always use uppercase text */
text-transform: uppercase;
font-weight: bold;

/* Remove bootstrap border and radius*/
border: 0px;
border-radius 0px;

color: var(--MHP-white) !important;
background-color: var(--MHP-purple);

&:hover {
  /* Slightly darker purple */
  background-color: #37279e;
} 
`

const Button = ({ children, href }) => (
  <ButtonLink className="btn btn-block" to={href}>
    {children}
  </ButtonLink>
)

Button.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string,
}

Button.defaultProps = {
  children: "Example Button Text",
}

export default Button

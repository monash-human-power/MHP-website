import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from 'prop-types';

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
    <>
        <ButtonLink className="btn btn-block" to={href}> {children} </ButtonLink>
    </>
)

Button.PropTypes = {
    children: PropTypes.string
};

Button.defaultProps = {
    children: 'HELLLLP MEEEEEE'
};

// TODO: Add type checking

export default Button

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import propTypes from 'prop-types';

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

Button.propTypes = {
    children: propTypes.string,
    href: propTypes.string,
};

Button.defaultProps = {
    children: 'HELLLLP MEEEEEE',
    href: '#',
};

export default Button

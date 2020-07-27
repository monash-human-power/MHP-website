import React from "react"
import propTypes from 'prop-types'
import styled from "styled-components"

import Button from "./button"

const InfoHeading = styled.h2`
/* Always use uppercase text */
text-transform: uppercase;
font-weight: bold;

&::before {
    content: "×"; 
    color: var(--MHP-purple);
    padding-right: 10px;
    }
`

const InfoBlock = ({ heading, description, buttonText, image, href }) => (

    // col order-first and col order-last sets the order of the components
    <div className="row my-3">
        {/* Text component */}
        <div className="col-md order-first">
            <InfoHeading> {heading} </InfoHeading>
            <p> {description} </p>

            <div className="row">
                <div className="col-md-8">
                    <Button href={href}> {buttonText} </Button>
                </div>
            </div>

        </div>

        {/* Image component */}
        <div className="col-md order-last" style={{ height: 500, border: "red solid 2px" }}>
            {/* TODO: insert real image */}
            image
        </div>

    </div>

)

InfoBlock.propTypes = {
};

InfoBlock.defaultProps = {
    heading: "Heading example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Example Button Text",
    href: "/",
    image: "NNED OT FAJKSASDKLA",
};

export default InfoBlock

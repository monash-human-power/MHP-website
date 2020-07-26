import React from "react"
import Button from "./button"
import styled from "styled-components"

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

    <div className="row">
        {/* Text component */}
        <div className="col-md order-first">
            <InfoHeading>Who we are</InfoHeading>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="row">
                <div className="col-md-8">
                    <Button href={href}> Meet the team </Button>
                    <Button href={href} />
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

// TODO: Add type checking

export default InfoBlock

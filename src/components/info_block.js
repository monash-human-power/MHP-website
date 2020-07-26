import React from "react"
import Button from "./button"

const InfoBlock = ({ href }) => (

    // col order-first and col order-last sets the order of the components

    <div className="row">
        {/* Text component */}
        <div className="col order-first">
            <h2>hello world</h2>
            <p> this is just sample text to help me lay it out</p>

            <div className="row">
                <div className="col-md-8">
                    <Button href={href}> click me pls </Button>

                </div>
            </div>

        </div>

        {/* Image component */}
        <div className="col order-last">
            image
        </div>

    </div>

)

// TODO: Add type checking

export default InfoBlock

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBlock from "../components/info_block"

import MHP_green_crosshair from "../images/Group 4.svg"
import MHP_bike_graphic from "../images/outter_bike.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* Bike graphic */}
    <div
      className="container-fluid py-5"
      style={{
        background: `repeat center/50px url(${MHP_green_crosshair}), black`,
      }}
    >
      <div className="row justify-content-center pt-4 mt-4">
        <img src={MHP_bike_graphic} alt="MHP bike graphic" />
      </div>

      <div className="row justify-content-center">
        <h1
          style={{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
          }}
          className="p-2 m-3"
        >
          MONASH HUMAN POWER
        </h1>
      </div>
    </div>

    {/* Main content */}
    <div className="container my-5">
      <InfoBlock
        heading="Who we are"
        buttonText="Meet the team"
        href="/team"
        reverseOrder={false}
      />
      <InfoBlock
        heading="Our Mission"
        buttonText="See the bike"
        href="/bike"
        reverseOrder={true}
      />
      <InfoBlock
        heading="Our Goal"
        buttonText="See the race"
        href="/race"
        reverseOrder={false}
      />
      <InfoBlock
        heading="Outreach"
        buttonText="See the outreach"
        href="/outreach"
        reverseOrder={true}
      />
    </div>
  </Layout>
)

export default IndexPage

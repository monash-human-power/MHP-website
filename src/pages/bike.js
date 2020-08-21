import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

import MHP_purple_crosshair from "../images/crosshair_purple.svg";

const CrosshairLayout = styled(Layout)`
  background: repeat center/50px url(${MHP_purple_crosshair});
`;

const StatsSubheading = styled.p`
  padding: 0px;
  margin: 0px;
`;

const StatsInfo = styled.h2`
  background: var(--MHP-purple);
  color: white;
`;

const BikeInfoBlock = bikeObj => (
  <div className="row py-3 mb-5">
    {/* Text component */}
    <div className="col-md" style={{ background: "white" }}>
      <div className="row py-3 justify-content-between">
        <div
          className="col-md-12 "
          style={{ background: "white", border: "0px solid black" }}
        >
          <h2> {bikeObj.name} </h2>
          <p> {bikeObj.description} </p>
        </div>

        <div className="col-sm my-2 py-2">
          <StatsSubheading> BUILT </StatsSubheading>
          <StatsInfo className="p-2 m-0">
            {" "}
            {bikeObj.start_year} - {bikeObj.end_year}{" "}
          </StatsInfo>
        </div>

        <div className="col-sm my-2 py-2">
          <StatsSubheading>MAX SPEED</StatsSubheading>
          <StatsInfo className="p-2 m-0">
            {bikeObj.top_speed_km} KM/H{" "}
          </StatsInfo>
        </div>
      </div>

      <div className="row"></div>
    </div>
    {/* Image component */}
    <div className="col-md align-self-center">
      <Img fluid={bikeObj.image.childImageSharp.fluid} />
      <p
        className="p-0 m-0"
        style={{
          textAlign: "left",
          position: "absolute",
          right: 30,
          bottom: 10,
          color: "var(--MHP-white)",
        }}
      >
        {" "}
        V{bikeObj.version}{" "}
      </p>
    </div>
  </div>
);

const BikePage = () => {
  const data = useStaticQuery(graphql`
    query BikePageQuery {
      file(
        relativePath: { eq: "bike.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
            bikes {
              name
              version
              description
              start_year
              end_year
              top_speed_km
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const bikeData = data.file.childMarkdownRemark.frontmatter;
  const bikeArr = bikeData.bikes;

  return (
    <CrosshairLayout>
      <SEO title="Bike" />
      <SubpageHeading> {bikeData.heading} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {BikeInfoBlock(bikeArr[0])}
        {BikeInfoBlock(bikeArr[1])}
        {BikeInfoBlock(bikeArr[2])}
      </div>
    </CrosshairLayout>
  );
};

export default BikePage;

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

import MHP_purple_crosshair from "../images/crosshair_purple.svg";

const CrosshairLayout = styled(Layout)`
  // background: repeat center/50px url(${MHP_purple_crosshair});
`;

const StatsSubheading = styled.p`
  text-transform: uppercase;
  padding: 0px;
  margin: 0px;
`;

const StatsInfo = styled.h2`
  background: var(--MHP-purple-2);
  color: var(--MHP-white);
`;

const WhiteDiv = styled.div`
  background: var(--MHP-white);
`;

const BikeInfoBlock = (bikeObj, reverseOrder, index) => (
  <div className="row py-3 my-5" key={index}>
    {/* Text component */}
    <div className={`col-md ${reverseOrder && "order-md-2 order-xs-1"}`}>
      <div className="row">
        <WhiteDiv className="col-md-12 py-3 ">
          <h2> {bikeObj.name.toUpperCase()} </h2>
          <p> {bikeObj.description} </p>
        </WhiteDiv>

        <WhiteDiv className="col-sm  py-2">
          <StatsSubheading>
            <b> built </b>
          </StatsSubheading>
          <StatsInfo className="p-2 m-0" style={{ textAlign: "center" }}>
            {" "}
            {bikeObj.start_year} - {bikeObj.end_year}{" "}
          </StatsInfo>
        </WhiteDiv>

        <WhiteDiv className="col-sm py-2">
          <StatsSubheading>
            <b>max speed</b>
          </StatsSubheading>
          <StatsInfo className="p-2 m-0" style={{ textAlign: "center" }}>
            {bikeObj.top_speed_km} KM/H{" "}
          </StatsInfo>
        </WhiteDiv>
      </div>
    </div>

    {/* Image component */}
    <div className={`col-md ${reverseOrder && "order-md-1 order-xs-2"}`}>
      <GatsbyImage image={bikeObj.image.childImageSharp.gatsbyImageData} alt={`Image of bike: ${bikeObj.name}`}/>
      <p
        className="p-0 m-0"
        style={{
          textAlign: "left",
          position: "absolute",
          right: 30,
          bottom: 10,
          color: "var(--MHP-white)",
        }}
      ></p>
    </div>
  </div>
);

const BikePage = () => {
  const data = useStaticQuery(graphql`query BikePageQuery {
  file(relativePath: {eq: "bike.md"}, sourceInstanceName: {eq: "markdown"}) {
    childMarkdownRemark {
      frontmatter {
        heading
        meta_page_description
        bikes {
          name
          version
          description
          start_year
          end_year
          top_speed_km
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}`);

  const bikeData = data.file.childMarkdownRemark.frontmatter;
  const bikeArr = bikeData.bikes;

  return (
    <CrosshairLayout>
      <SEO title="Bikes" description={bikeData.meta_page_description} />
      <SubpageHeading> {bikeData.heading} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {bikeArr.map((bikeArrElement, index) =>
          BikeInfoBlock(bikeArrElement, index % 2 === 1, index)
        )}
      </div>
    </CrosshairLayout>
  );
};

export default BikePage;

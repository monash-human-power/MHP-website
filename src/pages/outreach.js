import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

const BikePage = () => {
  return (
    <Layout>
      <SEO title="Outreach" description={"FILL IN LATER"} />
      <SubpageHeading> {"Outreach"} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">Outreach</div>
    </Layout>
  );
};

export default BikePage;

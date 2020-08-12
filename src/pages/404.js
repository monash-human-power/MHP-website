import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SubpageHeading from "../components/subpage_heading";
import SEO from "../components/seo";

const CentreImage = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`;

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query PageNotFoundQuery {
      file(
        relativePath: { eq: "404.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
            subtext
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const pageNotFoundData = data.file.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="404: Not found" />
      <SubpageHeading> {pageNotFoundData.heading} </SubpageHeading>

      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-md-12 m-3">
            <CentreImage src={pageNotFoundData.image.publicURL} />
          </div>

          <div className="col-md-12 m-3" style={{ textAlign: "center" }}>
            <h2>{pageNotFoundData.subtext}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

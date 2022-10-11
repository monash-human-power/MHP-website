import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SubpageHeading from "../components/subpage_heading";
import { Author } from "../pages/blog";

const Subheading = styled.p`
  font-style: italic;
`;

export default ({ data }) => {
  const postData = data.markdownRemark;
  const postFrontmatter = postData.frontmatter;
  const postInnerHTML = postData.html;

  return (
    <Layout>
      <SEO title={postFrontmatter.title} />
      <SubpageHeading>Blog</SubpageHeading>
      {/* Main content */}
      <div className="container mb-5 pt-5">
        <div className="row">
          <div className="col">
            <h1> {postFrontmatter.title} </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Subheading> {postFrontmatter.subtitle} </Subheading>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Author>
              By {postFrontmatter.author} — {postFrontmatter.date}{" "}
            </Author>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <div dangerouslySetInnerHTML={{ __html: postInnerHTML }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        author
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`;

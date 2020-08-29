import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(data.markdownRemark);
  return <h1>{post.frontmatter.title}</h1>;
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

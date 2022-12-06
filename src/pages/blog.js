import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "../components/link";
import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

export const Author = styled.span`
  font-weight: bold;
`;

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPageQuery {
      allFile(
        filter: {sourceInstanceName: {eq: "blog"}}
        sort: {childMarkdownRemark: {frontmatter: {date: DESC}}}
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                author
                title
                subtitle
                date(formatString: "D MMMM YYYY")
              }
            }
          }
        }
      }
    }
  `);

  const blogDataArr = data.allFile.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <SubpageHeading>Blog</SubpageHeading>
      <div className="container mb-5">
        {blogDataArr.map(({ node }) => {
          const frontMatter = node.childMarkdownRemark.frontmatter;
          const nodeFields = node.childMarkdownRemark.fields;
          return (
            <div id={node.id} className="row py-3 my-5">
              <div className="col">
                <Link to={node.childMarkdownRemark.fields.slug}>
                  <h2>{frontMatter.title}</h2>
                </Link>
                <Author>
                  By {frontMatter.author} — {frontMatter.date}
                </Author>
                <p>{frontMatter.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogPage;

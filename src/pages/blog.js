import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "../components/link";
import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";
import { SectionHeading, SectionParagraph } from "../components/content";

export const Author = styled.span`
  font-weight: bold;
`;

const EmptyBlogListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

// Text to display when there are no blog posts
const EmptyBlogList = () => {
  return (
    <EmptyBlogListContainer className="row py-2">
      <SectionHeading>It's pretty quiet here...</SectionHeading>
      <SectionParagraph>
        Stay tuned for posts from us. In the meantime, why not check out our social media pages?
      </SectionParagraph>
    </EmptyBlogListContainer>
  )
};

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

  // Prevent the placeholder page from being displayed in blog page
  const blogDataArr = data.allFile.edges.filter(({ node }) => node.childMarkdownRemark.fields.slug !== "/blog/.gitkeep/");

  return (
    <Layout>
      <SEO title="Blog" />
      <SubpageHeading>Blog</SubpageHeading>
      <div className="container mb-5">
        {blogDataArr.length > 0?
        blogDataArr.map(({ node }) => {
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
        })
        :
        <EmptyBlogList/>}
      </div>
    </Layout>
  );
};

export default BlogPage;

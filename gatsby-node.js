/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const parentNode = getNode(node.parent);

    // Only create slugs for the blog pages
    if (parentNode !== undefined) {
      if (parentNode.sourceInstanceName === "blog") {
        const slug = createFilePath({ node, getNode, basePath: "blog" });

        console.log(`Experiment created @ ${slug}`);

        createNodeField({
          node,
          name: "slug",
          value: `/blog${slug}`,
        });
      }
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Prevent non-blog pages and placeholder blog post from being created through this method
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { nin: [null, "/blog/.gitkeep/"] } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog_post.js"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};

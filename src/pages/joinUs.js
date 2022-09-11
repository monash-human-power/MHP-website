import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Stepper } from "react-form-stepper";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SubpageHeading from "../components/subpage_heading";
import InfoBlock from "../components/info_block";

const JoinUsPage = () => {
  const data = useStaticQuery(graphql`
    query JoinUsPageQuery {
      file(
        relativePath: { eq: "joinUs.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
            meta_page_description
            recruitment_categories {
              name
              is_open
              description
              closed_description
              link
              more_info_link
              eoi_link
              id
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            FAQs {
              question
              answer
            }
          }
        }
      }
    }
  `);

  const joinUsData = data.file.childMarkdownRemark.frontmatter;
  const recruitmentArr = joinUsData.recruitment_categories;
  const faqsArr = joinUsData.FAQs;

  return (
    <Layout>
      <SEO
        title={joinUsData.heading}
        description={joinUsData.meta_page_description}
      />
      <SubpageHeading> {joinUsData.heading} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {/* Recruitment categories */}
        <div>
          {recruitmentArr.map((blockData, index) => (
            <InfoBlock
              heading={blockData.name}
              description={
                blockData.is_open
                  ? blockData.description
                  : blockData.closed_description
              }
              // Only show EOI link if it's not empty
              buttonText={
                blockData.is_open
                  ? "Apply now!"
                  : blockData.eoi_link !== ""
                  ? "Expression of interest"
                  : ""
              }
              href={blockData.is_open ? blockData.link : blockData.eoi_link}
              // Link to more info about the recruitment
              buttonText2={
                blockData.is_open && blockData.more_info_link !== ""
                  ? "More info"
                  : ""
              }
              href2={blockData.more_info_link}
              image={blockData.image.childImageSharp.fluid}
              key={index}
              // Example key would be 1 (index of the data)
              id={blockData.id}
              // Flips the order for every second block
              reverseOrder={index % 2 === 1}
            />
          ))}
        </div>

        {/* Recruitment Process */}
        <div className="row m-4">
          <div className="col text-center">
            <h2 className="p-3">Recruitment Process</h2>
            <Stepper
              steps={[
                { label: "Apply" },
                { label: "Interview Invite" },
                { label: "Interview" },
                { label: "Result" },
              ]}
              activeColor="#37279e"
              activeStep={3}
            />
          </div>
        </div>

        {/* FAQs */}
        <div className="row m-4">
          <div className="col">
            <h2 className="p-4 text-center">FAQ</h2>
            <div className="accordion" id="accordionFAQ">
              {faqsArr.map((faqsData, index) => (
                <div className="card m-1">
                  <div className="card-header" id={`${index}`}>
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left"
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        {faqsData.question}
                      </button>
                    </h2>
                  </div>
                  {/* Set class below to "collapse show" to make not hide the contents by default */}
                  <div
                    id={`collapse${index}`}
                    className="collapse"
                    aria-labelledby={`heading${index}`}
                    data-parent="#accordionFAQ"
                  >
                    <div className="card-body">{faqsData.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUsPage;

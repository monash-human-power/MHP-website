import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SubpageHeading from "../components/subpage_heading";
import Button from "../components/button";

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
            buttons {
              buttonText
              link
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
  const buttonsArr = joinUsData.buttons;
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
        {/* row of buttons */}
        <div className="row m-4">
          {/* apply Buttons */}
          {buttonsArr.map(buttonData => (
            <div className="col-lg m-3">
              {buttonData.buttonText !== "" &&
                buttonData.buttonText !== null && (
                  <Button href={buttonData.link}>
                    {buttonData.buttonText}
                  </Button>
                )}
            </div>
          ))}
        </div>

        {/* Recruitment Process */}
        <div className="row m-4">
          <div className="col text-center">
            <h2 className="p-3">Recruitment Process</h2>
            <div className="text-center p-2">
              <button className="btn btn-primary" disabled>
                {"1) Apply".toUpperCase()}
              </button>
            </div>
            <div className="text-center p-2">
              <button className="btn btn-primary" disabled>
                {"2) Interview Invite".toUpperCase()}
              </button>
            </div>
            <div className="text-center p-2">
              <button className="btn btn-primary" disabled>
                {"3) Interview".toUpperCase()}
              </button>
            </div>
            <div className="text-center p-2">
              <button className="btn btn-primary" disabled>
                {"4) Result".toUpperCase()}
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="row m-4">
          <div className="col text-center">
            <h2 className="p-4">FAQ</h2>
            {faqsArr.map((faqsData, index) => (
              <div id={`faq-${index}`}>
                <h3>{faqsData.question}</h3>
                <p>{faqsData.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUsPage;

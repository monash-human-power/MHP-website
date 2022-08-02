import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Accordion } from "react-bootstrap";
import { Stepper } from "react-form-stepper";
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
            <div className="col text-center">
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
            {faqsArr.map((faqsData, index) => (
              <Accordion className="m-1">
                <Accordion.Item eventKey={`${index}`}>
                  <Accordion.Header style={{ color: "red" }}>
                    {faqsData.question}
                  </Accordion.Header>
                  <Accordion.Body>{faqsData.answer}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUsPage;

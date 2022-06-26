import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SubpageHeading from "../components/subpage_heading";
import Button from "../components/button";
import { ProgressBar, Accordion } from "react-bootstrap";

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
              id
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
          {/* Apply Buttons */}
          {buttonsArr.map(buttonData => (
            <div className="col-lg m-5">
              {buttonData.buttonText !== "" &&
                buttonData.buttonText !== null && (
                  <Button href={buttonData.link}>
                    {" "}
                    {buttonData.buttonText}{" "}
                  </Button>
                )}
            </div>
          ))}
        </div>
        {/* Recruitment Process */}
        <div className="row m-4">
          <div className="col text-center">
            <h2 className="p-3">Recruitment Process</h2>
            {/* TODO: use a progress bar https://getbootstrap.com/docs/5.0/components/progress/ */}
            <ProgressBar style={{ fontSize: "100%", blockSize: "50%" }}>
              <ProgressBar now={25} key={1} label={"Apply".toUpperCase()} />
              <ProgressBar
                variant="warning"
                now={25}
                key={2}
                label={"Interview Invite".toUpperCase()}
              />
              <ProgressBar
                variant="danger"
                now={25}
                key={3}
                label={"Interview".toUpperCase()}
              />
              <ProgressBar
                variant="success"
                now={25}
                key={3}
                label={"Result".toUpperCase()}
              />
            </ProgressBar>
          </div>
        </div>
        <div className="row m-5">
          <div className="col text-center">
            <h2 className="p-4">FAQs</h2>
            {/* FAQs Accordion */}
            <div class="accordion accordion-flush" id="FaqAccordion">
              {/* TODO: use accordion from react bootstrap  https://getbootstrap.com/docs/5.0/components/accordion/ */}
              <Accordion>
                {faqsArr.map(faqsData => (
                  <Accordion>
                    <Accordion.Item eventKey={faqsData.id}>
                      <Accordion.Header
                        as={"h3"}
                        style={{ tabSize: "100%", blockSize: "100%" }}
                      >
                        {faqsData.question}
                      </Accordion.Header>
                      <Accordion.Body>{faqsData.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUsPage;

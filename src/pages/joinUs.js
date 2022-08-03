import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
            <div class="accordion" id="accordionFAQ">
              {faqsArr.map((faqsData, index) => (
                <div class="card m-1">
                  <div class="card-header" id={`${index}`}>
                    <h2 class="mb-0">
                      <button
                        class="btn btn-block text-left"
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
                    class="collapse"
                    aria-labelledby={`heading${index}`}
                    data-parent="#accordionFAQ"
                  >
                    <div class="card-body">{faqsData.answer}</div>
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

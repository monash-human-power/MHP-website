import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SubpageHeading from "../components/subpage_heading";
// import InfoBlock from "../components/info_block";
import styled from "styled-components";
import Button from "../components/button.js";

const ReviewCol = styled.div`
  border: 20px solid black;
  }
`;

const ReviewColR = styled.div`
  border: 20px solid red;
  }
`;

const ReviewColBlue = styled.div`
  border: 20px solid blue;
  }
`;

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
          }
        }
      }
    }
  `);

  const joinUsData = data.file.childMarkdownRemark.frontmatter;
  const buttonsArr = joinUsData.buttons;
  //   const infoBlockArr = outreachData.blocks;
  //   const reviewsArr = outreachData.reviews;

  return (
    <Layout>
      <SEO
        title={joinUsData.heading}
        description={joinUsData.meta_page_description}
      />
      <SubpageHeading> {joinUsData.heading} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        <ReviewCol>
          <div className="row pt-2 mb-5 mt-3">
            <ReviewColR>
              {/* Apply Buttons */}
              <div className="row">
                {buttonsArr.map(buttonData => (
                  <div className="row pt-2 mb-5 mt-3">
                    <ReviewColBlue>
                      {buttonData.buttonText !== "" &&
                        buttonData.buttonText !== null && (
                          <Button href={buttonData.link}>
                            {" "}
                            {buttonData.buttonText}{" "}
                          </Button>
                        )}
                    </ReviewColBlue>
                  </div>
                ))}
              </div>
            </ReviewColR>
          </div>
        </ReviewCol>
      </div>
    </Layout>
  );
};

export default JoinUsPage;

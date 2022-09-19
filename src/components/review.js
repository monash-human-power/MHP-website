import React from "react";
import styled from "styled-components";
import { CenteredSection, SectionHeading } from "./content";

const ReviewCol = styled.div`
  border: 1px solid black;

  /* Dispose of shadow */
  transition: 0.1s;

  &:hover {
    /* Show shadow */
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const ReviewCell = ({ person, quote }, index) => (
  <ReviewCol className="col-md m-2 p-3" key={index}>
    <p>
      <b>
        <i>"{quote}"</i>
      </b>
    </p>
    <p>{person}</p>
  </ReviewCol>
);

const CELLS_PER_ROW = 2;

const ReviewGrid = ({ className, reviewsArray }) => {
  let numRows = Math.ceil(reviewsArray.length / CELLS_PER_ROW);
  return (
    <div className={className}>
      <CenteredSection className="row p-3">
        <SectionHeading>Reviews</SectionHeading>
      </CenteredSection>
      {/* Dynamically generate cells */}
      {[...Array(numRows).keys()].map(row => {
        return (
          <div className="row">
            {reviewsArray
              .slice(row * CELLS_PER_ROW, (row + 1) * CELLS_PER_ROW)
              .map(ReviewCell)}
          </div>
        );
      })}
    </div>
  );
};

export default ReviewGrid;
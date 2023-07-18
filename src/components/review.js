import React from "react";
import { CenteredSection, SectionHeading } from "./content";
import { TextCellBox } from "./text_grid";

const CELLS_PER_ROW = 2;

const ReviewCell = ({ person, quote }, index) => (
  <TextCellBox className="col-md m-2 p-3" key={index}>
    <p>
      <b>
        <i>"{quote}"</i>
      </b>
    </p>
    <p>{person}</p>
  </TextCellBox>
);

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

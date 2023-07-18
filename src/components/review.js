import React from "react";
import { CenteredSection, SectionHeading } from "./content";
import { TextCellBox } from "./text_grid";

/**
 * Box component for {@link ReviewCell}.
 */
const CELLS_PER_ROW = 2;

/**
 * Component for individual review cell.
 * @param person Person name and position
 * @param quote Review quote
 * @param index Overall index of cell review array
 */
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

/**
 * Component for review grid in outreach page.
 * @param className Additional classes to pass
 * @param reviewsArray An array of reviews and the reviewer's name and position
 */
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

import React from "react";
import styled from "styled-components";

const TextCellBox = styled.div`
  border: 1px solid black;
`;

const NumberCircle = styled.div`
  width: 75px;
  line-height: 75px;
  border-radius: 50%;
  text-align: center;
  font-size: 48px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

const TextCellContent = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const TextCell = ({ content }, index) => (
  <TextCellBox className="col-md m-2 p-3" key={index}>
    <div className="row">
      <div className="col d-flex justify-content-center">
        <NumberCircle>{index + 1}</NumberCircle>
      </div>
    </div>

    <div className="row">
      <div className="col d-flex justify-content-center">
        <TextCellContent>{content}</TextCellContent>
      </div>
    </div>
  </TextCellBox>
);

const CELLS_PER_ROW = 3;

/**
 * Text grid with a number on top of it.
 * @param className CSS class name for this component
 * @param gridHeading heading for the entire grid
 * @param cellArray an array of text as object {content}
 */
const NumberedTextGrid = ({ className, gridHeading, cellArray }) => {
  let numRows = Math.ceil(cellArray.length / CELLS_PER_ROW);
  console.log(JSON.stringify(cellArray));
  return (
    <div className={className}>
      <div className="row">
        <h2 className="p-3 outline-black-white-heading">{gridHeading}</h2>
      </div>

      {/* Dynamically generate cells */}
      {[...Array(numRows).keys()].map(row => {
        return (
          <div className="row">
            {cellArray
              .slice(row * CELLS_PER_ROW, (row + 1) * CELLS_PER_ROW)
              .map(TextCell)}
          </div>
        );
      })}
    </div>
  );
};

export default NumberedTextGrid;

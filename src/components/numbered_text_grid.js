import React from "react";
import styled from "styled-components";
import { CenteredSection, SectionHeading } from "./content";

const TextCellBox = styled.div`
  border: 1px solid black;

  /* Dispose of shadow */
  transition: 0.1s;

  &:hover {
    /* Show shadow */
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
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

const TextCellHeading = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const TextCell = ({ heading, content }, index, startIndex, showNumber) => (
  <TextCellBox className="col-md m-2 p-3" key={index}>
    {/* only show number if enabled */}
    {showNumber && (
      <div className="row">
        <div className="col d-flex justify-content-center">
          <NumberCircle>{startIndex + index + 1}</NumberCircle>
        </div>
      </div>
    )}

    <div className="row">
      <div className="col d-flex justify-content-center">
        <TextCellHeading>{heading}</TextCellHeading>
      </div>
    </div>

    {content !== "" && (
      <div className="row">
        <div className="col d-flex justify-content-center">
          <p>{content}</p>
        </div>
      </div>
    )}
  </TextCellBox>
);

const DEFAULT_CELLS_PER_ROW = 3;

/**
 * Text grid with a number on top of it.
 * @param className CSS class name for this component
 * @param gridHeading heading for the entire grid
 * @param cellArray an array of text as object {content}
 * @param cellsPerRow number of cells in each row. Defaults to 3
 * @param showNumber show a number for each cell
 */
const NumberedTextGrid = ({
  className,
  gridHeading,
  cellArray,
  cellsPerRow = DEFAULT_CELLS_PER_ROW,
  showNumber = false,
}) => {
  let numRows = Math.ceil(cellArray.length / cellsPerRow);
  console.log(JSON.stringify(cellArray));
  return (
    <div className={className}>
      <CenteredSection className="row p-3">
        <SectionHeading>{gridHeading}</SectionHeading>
      </CenteredSection>

      {/* Dynamically generate cells */}
      {[...Array(numRows).keys()].map(row => {
        return (
          <div className="row">
            {cellArray
              .slice(row * cellsPerRow, (row + 1) * cellsPerRow)
              .map((cell, index) => {
                return TextCell(cell, index, row * cellsPerRow, showNumber);
              })}
          </div>
        );
      })}
    </div>
  );
};

export default NumberedTextGrid;
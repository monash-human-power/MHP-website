import React from "react";
import styled from "styled-components";
import Link from "./link";
import { CenteredSection, SectionHeading } from "./content";

const DEFAULT_CELLS_PER_ROW = 3;

const TextCellBox = styled.div`
  border: 1px solid black;
`;

const TextCellLinkBox = styled.div`
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

const TextCellBody = ({ text }) => (
  <div className="row">
    <div className="col d-flex justify-body-center">
      <p>{text}</p>
    </div>
  </div>
);

const TextCellContent = ({ heading, body, index, startIndex, showNumber }) => (
  <>
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

    {body !== "" && <TextCellBody text={body} />}
  </>
); // TODO

const TextCell = (
  { heading, body, link = "" },
  index,
  startIndex,
  showNumber
) => {
  if (link === "") {
    return (
      <TextCellBox className="col-md m-2 p-3" key={index}>
        <TextCellContent
          heading={heading}
          body={body}
          index={index}
          startIndex={startIndex}
          showNumber={showNumber}
        />
      </TextCellBox>
    );
  } else {
    return (
      <Link to={link}>
        <TextCellLinkBox className="col-md m-2 p-3" key={index}>
          <TextCellContent
            heading={heading}
            body={body}
            index={index}
            startIndex={startIndex}
            showNumber={showNumber}
          />
        </TextCellLinkBox>
      </Link>
    );
  }
}; // TODO

const TextGrid = ({
  className,
  gridHeading,
  cellArray,
  cellsPerRow = DEFAULT_CELLS_PER_ROW,
  showNumber = false,
}) => {
  let numRows = Math.ceil(cellArray.length / cellsPerRow);
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

export default TextGrid;

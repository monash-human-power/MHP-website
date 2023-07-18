import React from "react";
import styled from "styled-components";
import Link, { isInternalLink } from "./link";
import { CenteredSection, SectionHeading } from "./content";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const DEFAULT_CELLS_PER_ROW = 3;

const TextCellBox = styled.div`
  border: 1px solid black;
`;

const ClickableTextLinkBox = styled.div`
  // Clickable cursor look
  cursor: pointer;

  border: 1px solid black;

  /* Dispose of shadow */
  transition: 0.1s;

  &:hover {
    /* Show shadow */
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
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

const TextCellHeading = styled.h2`
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;
`;

const TextCellBody = styled.p`
  color: black;
  text-decoration: none;
`;

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

    {body !== "" && <TextCellBody>{body}</TextCellBody>}
  </>
);

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
  } else if (isInternalLink(link)) {
    return (
      <ClickableTextLinkBox className="col-md m-2 p-3" key={index}>
        <AnchorLink to={link}>
          <TextCellContent
            heading={heading}
            body={body}
            index={index}
            startIndex={startIndex}
            showNumber={showNumber}
          />
        </AnchorLink>
      </ClickableTextLinkBox>
    );
  } else {
    return (
      <ClickableTextLinkBox className="col-md m-2 p-3" key={index}>
        <Link to={link}>
          <TextCellContent
            heading={heading}
            body={body}
            index={index}
            startIndex={startIndex}
            showNumber={showNumber}
          />
        </Link>
      </ClickableTextLinkBox>
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

import React from "react";
import styled from "styled-components";
import Link, { isInternalLink } from "./link";
import { CenteredSection, SectionHeading } from "./content";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const DEFAULT_CELLS_PER_ROW = 3;

/**
 * Box component  for {@link TextCell}.
 */
export const TextCellBox = styled.div`
  border: 1px solid black;
`;

/**
 * A version of {@link TextCellBox} which draws a shadow on hover.
 *
 * This should be used when the cell contains a link.
 */
export const ClickableTextLinkBox = styled(TextCellBox)`
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

/**
 * Number circle for {@link TextCellBody}, with black circle and white number.
 */
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

/**
 * Component for heading of {@link TextCellContent}.
 */
const TextCellHeading = styled.h2`
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;
`;

/**
 * Component for body of {@link TextCellContent}.
 */
const TextCellBody = styled.p`
  color: black;
  text-decoration: none;
`;

/**
 * Component for cell content for a {@link TextCell}.
 * @param heading Cell heading
 * @param body Cell body
 * @param link Cell link (optional)
 * @param index Overall index of cell content array
 * @param startIndex Index of first item on the row
 * @param showNumber Whether to show a number on each cell
 */
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

/**
 * Component for individual cells of {@link TextGrid}.
 * @param heading Cell heading
 * @param body Cell body
 * @param link Cell link (optional)
 * @param index Overall index of cell content array
 * @param startIndex Index of first item on the row
 * @param showNumber Whether to show a number on each cell
 */
const TextCell = (
  { heading, body, link = "" },
  index,
  startIndex,
  showNumber
) => {
  if (link === "") {
    // if there is no link, do not draw shadows
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
};

/**
 * Component for a grid section with black borders and an optional number on each cell.
 * Examples include the 'Our Values' section in about page and 'Recruitment Process' section in join us page.
 * @param className Additional classes to pass
 * @param gridHeading Section heading
 * @param cellArray An array of cells containing cell heading, body test (optional) and link (optional)
 * @param cellsPerRow Number of cells per row (optional). If not present, the default will be used
 * @param showNumber Show a number on each cell above cell heading, counting from first cell
 */
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

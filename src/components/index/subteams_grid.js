import React from "react";
import TextGrid from "../text_grid";

const SUBTEAMS_PER_ROW = 3;

/**
 * A version of {@link TextGrid} for the 'Subteams' section of about page.
 * @param className Additional classes to pass
 * @param subteamsArray An array of subteams data
 */
const SubteamsGrid = ({ className, subteamsArray }) => {
  let cellArray = subteamsArray.map(subteam => ({
    heading: subteam.name,
    body: subteam.description,
    link: `/subteams#${subteam.id}`,
  }));
  return (
    <TextGrid
      className={className}
      gridHeading="Subteams"
      cellArray={cellArray}
      cellsPerRow={SUBTEAMS_PER_ROW}
    />
  );
};

export default SubteamsGrid;

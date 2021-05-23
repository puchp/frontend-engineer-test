import React, { FC } from "react";

import { mockLocation } from "../../services/getLocation";

// This will appear as a popup modal on desktop view and as a full page on mobile view.
// The Location map will display all of the location objects on a google map using their Latitude and Longitude coordinates.
// If a marker is selected the popup will display:
// ● name of the location
// ● maximum number of units that can be distributed there
// ● fee for distribution
// ● “add” button
// The Add button will return the user to the calculator page and add this location to the list. Add button should be greyed out if the location has already been added.

type LocationPropsType = {
  // props: string;
};

const Location: FC<LocationPropsType> = () => {
  return (
    <div>
      "Location component"
      <p>{JSON.stringify(mockLocation)}</p>
    </div>
  );
};

export default Location;

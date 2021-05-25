import React, { FC, useEffect, useState } from "react";
import { ProductType } from "../../types/Product";
import { getLocations } from "../../services/location";

type LocationPropsType = {
  // props: string;
};

const Location: FC<LocationPropsType> = () => {
  const [isLoadingLocations, setIsLoadingLocations] = useState(false);
  const [locationsData, setLocationsData] = useState<ProductType[] | []>([]);

  useEffect(() => {
    async function getInitLocationsData() {
      const initLocationsData = await getLocations();
      if (initLocationsData) {
        setLocationsData(initLocationsData);
        setIsLoadingLocations(false);
      }
    }
    setIsLoadingLocations(true);
    getInitLocationsData();
  }, []);

  return (
    <div>
      "Location component"
      <br />
      {isLoadingLocations ? (
        <p>Loading...</p>
      ) : (
        <p>{JSON.stringify(locationsData)}</p>
      )}
    </div>
  );
};

export default Location;

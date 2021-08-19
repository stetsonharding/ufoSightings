import React, { useState } from "react";

//syles
import "./Index.scss";

// Components
import Pagination from "../components/pagination/Pagination";
import StateSelection from "../components/stateSelection/StateSelection";
import UfoCards from "../components/ufoCards/UfoCard";
import GoogleMap from "../components/googleMap/GoogleMap";
import UfoGiff from "../components/ufoGiff/UfoGiff";

const Index = (props) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isIconShown, setIsIconShown] = useState(true);

  const {
    setUserStateSelection,
    userStateSelection,
    ufoSightings,
    lastState,
    setLastState,
    lastKey,
    setLastKey,
    setUfoSightings,
  } = props;

  return (
    <>
      <StateSelection
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
        setIsIconShown={setIsIconShown}
      />

      <UfoCards
        ufoSightings={ufoSightings}
        setIsModalShown={setIsModalShown}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />

      {isIconShown ? (
        <>
          <UfoGiff />
        </>
      ) : (
        <Pagination
          lastKey={lastKey}
          setLastKey={setLastKey}
          lastState={lastState}
          setLastState={setLastState}
          setUfoSightings={setUfoSightings}
        />
      )}
      <GoogleMap
        show={isModalShown}
        onHide={() => setIsModalShown(false)}
        ufoSightings={ufoSightings}
        latitude={latitude}
        longitude={longitude}
      />
    </>
  );
};

export default Index;

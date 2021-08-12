import React, { useState } from "react";

// Components
import Pagination from "../components/pagination/Pagination";
import StateSelection from "../components/stateSelection/StateSelection";
import UfoCards from "../components/ufoCards/UfoCard";
import GoogleMap from "../components/googleMap/GoogleMap";

const Index = (props) => {
  const [isModalShown, setIsModalShown] = useState(false);

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
      />

      <UfoCards ufoSightings={ufoSightings} setIsModalShown={setIsModalShown} />

      <Pagination
        lastKey={lastKey}
        setLastKey={setLastKey}
        lastState={lastState}
        setLastState={setLastState}
        setUfoSightings={setUfoSightings}
      />

      <GoogleMap show={isModalShown} onHide={() => setIsModalShown(false)} />
    </>
  );
};

export default Index;

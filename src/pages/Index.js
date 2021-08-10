import React from "react";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Components
import Pagination from "../components/pagination/Pagination";
import StateSelection from "../components/stateSelection/StateSelection";
import UfoCards from "../components/ufoCards/UfoCard";

const Index = (props) => {
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

  //looping through ufo sightings to display correct search in ufo cards.
  const ufoItems = ufoSightings.map((sighting, index) => (
    <UfoCards
      key={index}
      state={sighting.state}
      city={sighting.city}
      datetime={sighting.datetime}
      shape={sighting.shape}
      comments={sighting.comments}
    />
  ));

  return (
    <>
      <StateSelection
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
      />

      <Container>
        <Row>{ufoItems}</Row>
      </Container>

      <Container>
        <Pagination
          lastKey={lastKey}
          setLastKey={setLastKey}
          lastState={lastState}
          setLastState={setLastState}
          setUfoSightings={setUfoSightings}
        />
      </Container>
    </>
  );
};

export default Index;

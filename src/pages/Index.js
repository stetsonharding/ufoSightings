import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import StateSelection from "../components/stateSelection/StateSelection";
import UfoCards from "../components/ufoCards/UfoCard";

const Index = (props) => {
  const { setUserStateSelection, userStateSelection, ufoSightings } = props;

  return (
    <>
      <StateSelection
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
      />

      <Container>
        <Row>
          {ufoSightings.map((sighting) => (
            <UfoCards
              key={sighting.duration}
              state={sighting.state}
              city={sighting.city}
              datetime={sighting.datetime}
              shape={sighting.shape}
              comments={sighting.comments}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Index;

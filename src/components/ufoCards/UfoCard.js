import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function UfoCards(props) {
  const { ufoSightings, setIsModalShown } = props;

  //looping though data to create individual ufo sightings.
  const ufoItems = ufoSightings.map((sighting, index) => (
    <Col md={6} lg={3} key={index}>
      <Card.Body>
        <Card.Title>{sighting.state}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          {" "}
          City: {sighting.city}
        </Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted">
          Date/Time: {sighting.datetime}
        </Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted">
          Shape: {sighting.shape}
        </Card.Subtitle>
        <Card.Text>{sighting.comments}</Card.Text>
        <Button size="sm" onClick={() => setIsModalShown(true)}>
          Google Maps
        </Button>
      </Card.Body>
    </Col>
  ));

  return (
    <Container>
      <Row>{ufoItems}</Row>
    </Container>
  );
}

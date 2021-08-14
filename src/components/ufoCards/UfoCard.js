import React from "react";

//bootstrap components
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function UfoCards(props) {
  const { ufoSightings, setIsModalShown, setLatitude, setLongitude } = props;

  //getting lat and long for google maps.
  function googleMapUfoSighting(sighting) {
    setIsModalShown(true);
    setLatitude(sighting.latitude);
    setLongitude(sighting.longitude);
  }

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
        <Button size="sm" onClick={() => googleMapUfoSighting(sighting)}>
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

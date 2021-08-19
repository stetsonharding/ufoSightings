import React from "react";

//styles
import "./UfoCards.scss";

//images
import GoogleMapIcon from "../../assets/GoogleMapIcon.svg";

//bootstrap components
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

export default function UfoCards(props) {
  const { ufoSightings, setIsModalShown, setLatitude, setLongitude } = props;

  //passing in current sightings
  //getting lat and long for google maps.
  const googleMapUfoSighting = (sighting) => {
    setIsModalShown(true);
    setLatitude(sighting.latitude);
    setLongitude(sighting.longitude);
  };

  //looping though data to create individual ufo sightings.
  const ufoItems = ufoSightings.map((sighting, index) => (
    <Col md={6} lg={6} xl={3} key={index}>
      <Card.Body className="UfoCard_ cardBody">
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
        <div className="UfoCard__ googleMapContainer">
          <img
            className="UfoCard__ googleMapIcon"
            src={GoogleMapIcon}
            alt="Google map Icon"
            onClick={() => googleMapUfoSighting(sighting)}
          />
        </div>
      </Card.Body>
    </Col>
  ));

  return (
    <Container>
      <Row>{ufoItems}</Row>
    </Container>
  );
}

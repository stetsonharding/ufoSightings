import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function UfoCards(props) {
  return (
    <Col key={props.duration} md={6} lg={3}>
      <Card.Body>
        <Card.Title>{props.state}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          {" "}
          City: {props.city}
        </Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted">
          Date/Time: {props.datetime}
        </Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted">
          Shape: {props.shape}
        </Card.Subtitle>
        <Card.Text>{props.comments}</Card.Text>
        <Card.Link href="#">Google Maps</Card.Link>
      </Card.Body>
    </Col>
  );
}

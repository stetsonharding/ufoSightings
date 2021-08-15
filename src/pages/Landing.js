import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";

//components
import Heading from "../components/heading/Heading";

import "./Landing.scss";

export default function Landing() {
  return (
    <Container fluid className="landingPage_container">
      <Heading />
    </Container>
  );
}

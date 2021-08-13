import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function GoogleMap(props) {
  const { onHide, show, latitude, longitude } = props;

  return (
    //Upon click of "google maps" in ufo cards, this modal will show up.
    <Modal
      show={show}
      size="lg"
      opacity
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          UFO Sighting
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Viewing with reported coordinates</h4>
        <iframe
          style={{
            width: "100%",
            height: "450px",
          }}
          title="UFO Sightings"
          src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`}
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

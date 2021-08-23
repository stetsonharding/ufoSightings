import React, { useEffect } from "react";
import firebase from "firebase";

import "./Pagination.scss";

//Bootstrap Components
import { Container } from "react-bootstrap";

export default function Pagination(props) {
  const { lastKey, setLastKey, lastState, setLastState, setUfoSightings } =
    props;

  //scroll to top of page when component re renders
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  //getting next page of ufo sightings
  const nextPage = () => {
    let allUfo = [];
    const query = firebase
      .database()
      .ref("ufos")
      .orderByChild("state")
      .startAt(lastState, lastKey)
      .limitToFirst(12);

    query.once("value").then((snapshot) => {
      //storing ufoSightings, the last state and the last key in state,
      //this is done to pick up where the user left off when switching pages.
      snapshot.forEach((snap) => {
        allUfo.push(snap.val());
        setLastState(snap.val().state);
        setLastKey(snap.key);
      });
      setUfoSightings(allUfo);
    });

    console.log(lastKey);
    console.log(lastState);
  };

  //getting previous page of ufo sighting
  const previousPage = () => {
    let allUfo = [];
    const query = firebase
      .database()
      .ref("ufos")
      .orderByChild("state")
      .endBefore(lastKey, lastState)
      .limitToFirst(12);

    query.once("value").then((snapshot) => {
      //storing ufoSightings, the last state and the last key in state,
      //this is done to pick up where the user left off when switching pages.
      snapshot.forEach((snap) => {
        allUfo.push(snap.val());
        setLastState(snap.val().state);
        setLastKey(snap.key);
      });
      setUfoSightings(allUfo);
    });
  };

  return (
    <Container className="button_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-arrow-left-square-fill previousBtn"
        viewBox="0 0 16 16"
        onClick={previousPage}
      >
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-arrow-right-square-fill nextBtn"
        viewBox="0 0 16 16"
        onClick={nextPage}
      >
        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
      </svg>
    </Container>
  );
}

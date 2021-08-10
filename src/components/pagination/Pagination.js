import React from "react";
import firebase from "firebase";

//Bootstrap Components
import Button from "react-bootstrap/Button";

export default function Pagination(props) {
  const { lastKey, setLastKey, lastState, setLastState, setUfoSightings } =
    props;

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
  };

  //getting previous page of ufo sighting
  const previousPage = () => {
    console.log("prev");
  };

  return (
    <div>
      <Button onClick={previousPage}>Previous</Button>
      <Button onClick={nextPage} style={{ margin: "10px" }}>
        next
      </Button>
    </div>
  );
}

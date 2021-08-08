import React, { useState, useEffect } from "react";
import "./index.css";
import firebase from "./firebase";

import Index from "./pages/Index";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ufoSightings, setUfoSightings] = useState([]);
  const [userStateSelection, setUserStateSelection] = useState("empty");
  const [lastState, setLastState] = useState("");
  const [lastKey, setLastKey] = useState("");

  useEffect(() => {
    let allUfo = [];

    //referencing firebase db
    const ufoRef = firebase.database().ref("ufos");
    //filter database searching for spacific state user is looking for
    const query = ufoRef
      .orderByChild("state")
      .equalTo(`${userStateSelection}`)
      .limitToFirst(12);

    query.once("value").then((snapshot) => {
      //storing ufoSightings in state
      snapshot.forEach((snap) => {
        allUfo.push(snap.val());
        setLastState(snap.val().state);
        setLastKey(snap.key);
      });
      setUfoSightings(allUfo);
    });
  }, [userStateSelection]);

  //start of pagination, need to move to pagination component.
  function nextPage() {
    let allUfo = [];
    const query = firebase
      .database()
      .ref("ufos")
      .orderByChild("state")
      // .equalTo(`${userStateSelection}`)
      .startAt(lastState, lastKey)
      .limitToFirst(12);

    query.once("value").then((snapshot) => {
      //storing ufoSightings in state
      snapshot.forEach((snap) => {
        allUfo.push(snap.val());
        setLastState(snap.val().state);
        setLastKey(snap.key);
      });
      setUfoSightings(allUfo);
    });
  }

  //UFO sightings console log testing.
  // const results = ufoSightings.map((item) => <h3>{item.city}</h3>);

  return (
    <>
      <Index
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
        ufoSightings={ufoSightings}
      />
      <button onClick={() => nextPage()}>next</button>
    </>
  );
}

export default App;

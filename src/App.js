import React, { useState, useEffect } from "react";
import "./index.css";
import firebase from "./firebase";

import Index from "./pages/Index";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ufoSightings, setUfoSightings] = useState([]);
  const [userStateSelection, setUserStateSelection] = useState("empty");

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
      });
      setUfoSightings(allUfo);
    });
  }, [userStateSelection]);

  //UFO sightings
  // const results = ufoSightings.map((item) => <h3>{item.city}</h3>);

  return (
    <>
      <Index
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
        ufoSightings={ufoSightings}
      />
    </>
  );
}

export default App;

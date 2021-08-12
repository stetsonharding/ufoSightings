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

  return (
    <>
      <Index
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
        ufoSightings={ufoSightings}
        setUfoSightings={setUfoSightings}
        lastKey={lastKey}
        lastState={lastState}
        setLastKey={setLastKey}
        setLastState={setLastState}
      />
    </>
  );
}

export default App;

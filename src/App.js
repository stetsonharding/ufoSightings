import React, { useState, useEffect } from "react";
import "./index.css";
import firebase from "./firebase";

function App() {
  const [ufoSightings, setUfoSightings] = useState([]);
  const [userStateSelection, setUserStateSelection] = useState("fl");

  useEffect(() => {
    //refrencing firebase db
    const ufoRef = firebase.database().ref("ufos");
    //filtering through database searching for the spacific state the user is looking for
    const query = ufoRef
      .orderByChild("state")
      .equalTo(`${userStateSelection}`)
      .limitToFirst(3);

    query.once("value").then((snapshot) => {
      //storing ufoSightings in state
      setUfoSightings([snapshot.val()]);
    });
  }, []);

  console.log(ufoSightings);
  console.log(userStateSelection);

  return <h1>App</h1>;
}

export default App;

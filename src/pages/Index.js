import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StateSelection from "../stateSelection/StateSelection";

const Index = () => {
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
      .limitToFirst(50);

    query.once("value").then((snapshot) => {
      //storing ufoSightings in state
      snapshot.forEach((snap) => {
        allUfo.push(snap.val());
      });
      setUfoSightings(allUfo);
    });
  }, [userStateSelection]);

  //UFO sightings
  // const results = ufoSightings.map((item) => <h1>{item.shape}</h1>);

  return (
    <>
      <StateSelection
        setUserStateSelection={setUserStateSelection}
        userStateSelection={userStateSelection}
      />
    </>
  );
};

export default Index;

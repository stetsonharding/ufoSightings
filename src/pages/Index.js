import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StateSelection from "../stateSelection/StateSelection";

const Index = () => {
  const [ufoSightings, setUfoSightings] = useState([]);
  const [userStateSelection, setUserStateSelection] = useState(
    "No Location Selected"
  );
  // console.log(ufoSightings);

  useEffect(() => {
    //referencing firebase db
    const ufoRef = firebase.database().ref("ufos");
    //filter database searching for spacific state user is looking for
    const query = ufoRef
      .orderByChild("state")
      .equalTo(`${userStateSelection}`)
      .limitToFirst(3);

    query.once("value").then((snapshot) => {
      //storing ufoSightings in state
      setUfoSightings([snapshot.val()]);
    });
  }, [userStateSelection]);

  console.log(ufoSightings);

  return (
    <StateSelection
      setUserStateSelection={setUserStateSelection}
      userStateSelection={userStateSelection}
    />
  );
};

export default Index;

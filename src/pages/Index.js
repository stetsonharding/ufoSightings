import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StateSelection from "../stateSelection/StateSelection";

const Index = () => {
  const [ufoSightings, setUfoSightings] = useState([]);
  const [userStateSelection, setUserStateSelection] = useState();

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
  }, [userStateSelection]);

  console.log(ufoSightings);
  console.log(userStateSelection);

  return (
    <StateSelection
      setUserStateSelection={setUserStateSelection}
      userStateSelection={userStateSelection}
    />
  );
};

export default Index;

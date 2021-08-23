//utils
import React, { useState, useEffect } from "react";
import firebase from "./firebase";

//components
import Landing from "./pages/Landing";
import Index from "./pages/Index";
//sass

import "./App.scss";
//react router

import { Switch, Route } from "react-router-dom";

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
    try {
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
    } catch (error) {
      console.log(new Error("hello"));
    }
  }, [userStateSelection]);

  return (
    <>
      <div className="test"></div>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/ufoSightings">
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
        </Route>
      </Switch>
    </>
  );
}

export default App;

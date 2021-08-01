import React, { useState } from "react";
import "./index.css";
import firebase from "./firebase";

function App() {
  const ufoRef = firebase.database().ref("ufos");
  const query = ufoRef.orderByChild("state").equalTo("fl").limitToFirst(10);

  query.once("value").then((snapshot) => {
    console.log(snapshot.val());
  });

  return <h1>App</h1>;
}

export default App;

import React from "react";

//components
import EnterButton from "../enterbtn/EnterButton";

import "./Heading.scss";
export default function Heading() {
  return (
    <>
      <div className="heading_container">
        <h1 className="ufoHeading">
          Greetings, <span>Earthling.</span>
        </h1>
        <p> UFO sightings, around the United States.</p>
        <EnterButton />
      </div>
    </>
  );
}

import React from "react";

function Title() {
  const titleStyle = {
    color: "silver",
    letterSpacing: "1px",
    textAlign: "center",
    paddingTop: "1em",
    fontFamily: "monospace",
  };

  return (
    <div>
      <h1 style={titleStyle}>Ufo Sightings</h1>
    </div>
  );
}

export default Title;

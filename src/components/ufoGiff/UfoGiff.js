import React from "react";

const centerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
};

const centerGiff = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const giffHeading = {
  color: "white",
  textTransform: "capitalize",
  letterSpacing: "1px",
};

function UfoGiff() {
  return (
    <div className="ufoGiff_Wrapper" style={centerContainer}>
      <div className="ufoGiff_Container" style={centerGiff}>
        <iframe
          title="hello"
          src="https://giphy.com/embed/26BoCVdjSJOWT0Fpu"
          width="480"
          height="360"
          frameBorder="0"
          // class="giphy-embed"
          allowFullScreen
        ></iframe>
        <h2 style={giffHeading}>Select your state to view all UFO sightings</h2>
      </div>
    </div>
  );
}

export default UfoGiff;

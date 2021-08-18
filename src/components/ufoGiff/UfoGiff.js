import React from "react";

import "./UfoGiff.scss";

const giffHeading = {
  color: "white",
  textTransform: "capitalize",
  letterSpacing: "1px",
};

function UfoGiff() {
  return (
    <div className="ufoGiff_Wrapper">
      <div className="ufoGiff_Container">
        <iframe
          className="ufoGiff"
          title="hello"
          src="https://giphy.com/embed/26BoCVdjSJOWT0Fpu"
          width="480"
          height="360"
          frameBorder="0"
          // class="giphy-embed"
          allowFullScreen
        ></iframe>
        <h3 style={giffHeading}>Tracking UFOs...</h3>
      </div>
    </div>
  );
}

export default UfoGiff;

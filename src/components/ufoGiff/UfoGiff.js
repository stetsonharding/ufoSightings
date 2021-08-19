import React from "react";

//syles
import "./UfoGiff.scss";

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
          allowFullScreen
        ></iframe>
        <h3 className="UfoGiff_heading">Tracking UFOs...</h3>
      </div>
    </div>
  );
}

export default UfoGiff;

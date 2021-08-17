import React from "react";
import { Link } from "react-router-dom";

import "./EnterButton.scss";

export default function EnterButton() {
  return (
    <Link to="/ufoSightings">
      <button className="enterButton">Enter</button>
    </Link>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return (
    <div className="loading-container">
      <FontAwesomeIcon icon={faSpinner} className="icon" />
      <h1>LOADING</h1>
    </div>
  );
}

export default Loading;

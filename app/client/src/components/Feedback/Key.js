import React from "react";

const Key = () => (
  <div>
    <h6>Key:</h6>
    <div className="row mb-1">
      <div className="col-md-2">
        <i className="fas fa-check" style={{ color: "green" }} />
      </div>
      <div className="col-md-8">
        The number is correct and in the right location.
      </div>
    </div>
    <div className="row mb-1">
      <div className="col-md-2">
        <i className="far fa-circle" style={{ color: "blue" }} />
      </div>
      <div className="col-md-8">
        The number is part of the code but it is in the wrong place.
      </div>
    </div>
    <div className="row mb-1">
      <div className="col-md-2">
        <i className="fas fa-times" style={{ color: "red" }} />
      </div>
      <div className="col-md-8">The number is not part of the code.</div>
    </div>
  </div>
);

export default Key;

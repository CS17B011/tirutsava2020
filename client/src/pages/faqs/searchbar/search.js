import React from "react";
// import "./search.css";

export default function Search({ handleChange }) {
  return (
    <>
      <div className="col-md-4 offset-md-4  pt-3">
        <div className="input-group mb-3">
          <input
            onChange={e => handleChange(e)}
            type="text"
            className="form-control"
            placeholder="Search ......"
            aria-label="Recipient's username"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

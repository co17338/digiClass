import { Component } from "react";
import { connect } from "react-redux";
import Profile from "../Pages/Teacher/Profile";

const Row = (props) => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0"> {props.tag}</h6>
        </div>
        <div class="col-sm-9 text secondary"> {props.value} </div>
      </div>
      <hr />
    </div>
  );
};

export default Row;

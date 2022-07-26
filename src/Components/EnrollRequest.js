import { Component } from "react";
import { connect } from "react-redux";
import Profile from "../Pages/Teacher/Profile";

const Enroll_Request = (props) => {
  return (
    <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0"> {props.tag}</h6>
                </div>
                <div class="col-sm-9 text secondary">
                  <button type="button" class="btn btn-info m-2 pb-2">
                    See Profile
                  </button>
                  <button type="button" class="btn btn-secondary m-2 pb-2">
                    Accept Request
                  </button>
                  <button type="button" class="btn btn-secondary m-2 pb-2">
                    Decline Request
                  </button>
                </div>
              </div>
  );
};

export default Enroll_Request;

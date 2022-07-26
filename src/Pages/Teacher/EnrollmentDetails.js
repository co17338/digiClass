import { Component, createContext, Profiler } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Enroll_Request from "../../components/EnrollRequest";

class T_EnrollmentDetails extends Component {
  render() {
    return (
      <div class="container bg-light">
        <div class="main-body">
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="">Teacher</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Enrollment Details
              </li>
            </ol>
          </nav>

          <div class="row">
            <div class="col-6">
              <h6 class="d-flex align-items-center mb-3">
                Enrollement Requests for Class Name
              </h6>
              <Enroll_Request tag="Student Name"/>
              <Enroll_Request tag="Student Name"/>
              <Enroll_Request tag="Student Name"/>
              <Enroll_Request tag="Student Name"/>

            </div>
            <div class="col-6">
              <h6 class="d-flex align-items-center mb-3">
                Enrolled Students in Class Name 
              </h6>
              
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.firstName,
  };
};

export default connect(mapStateToProps)(T_EnrollmentDetails);

import { Component, Profiler } from "react";
import { connect } from "react-redux";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

//ishita
class T_Profile extends Component {
  render() {
    return (
      <div
        class="container bg-light
       "
      >
        <div class="main-body">
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="javascript:void(0)">User</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>

          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src=""
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <p class="text-secondary mb-1">{this.props.name}</p>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Full name</h6>
                    </div>
                    <div class="col-sm-9 text secondary">{this.props.name}</div>
                  </div>
                  <hr></hr>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> User Id</h6>
                    </div>
                    <div class="col-sm-9 text secondary">
                      {this.props.user_id}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Phone No.</h6>
                    </div>
                    <div class="col-sm-9 text secondary">
                      {this.props.phone_no}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Email</h6>
                    </div>
                    <div class="col-sm-9 text secondary">
                      {this.props.email}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Address</h6>
                    </div>
                    <div class="col-sm-9 text secondary">
                      {this.props.address}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Experience</h6>
                    </div>
                    <div class="col-sm-9 text secondary"></div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Subjects</h6>
                    </div>
                    <div class="col-sm-9 text secondary"></div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm 6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">
                        Description of  courses
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Profile
                {this.props.name} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.firstName + " " + state.user.lastName,
    phone_no: state.user.phoneNo,
    email: state.user.email,
    address: state.user.address,
    user_id: state.user.userId,
  };
};

export default connect(mapStateToProps)(T_Profile);

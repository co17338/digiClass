import { Component, createContext, Profiler } from "react";
import { connect } from "react-redux";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "../../components/row"


//ishita


class T_Profile extends Component   {
  render() {
    return (
      <div
        class="container bg-light"
      >
        <div class="main-body">
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="">User</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Teacher Profile
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
                      alt="Teacher Photo "
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

                
                  <Row tag="Full Name " value={this.props.name} />
                  <Row tag="Teacher User Id " value={this.props.user_id}/>
                  <Row tag="Phone No." value={this.props.phone_no}/>
                  <Row tag="Email " value={this.props.email}/>
                  <Row tag="Address" value={this.props.address}/>
                  <Row tag="Expereince " value={this.props.expereince}/>
                  <Row tag="Subjects" value={this.props.subjects}/>

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
                      <hr></hr>
                      <Row tag=" Course Name " value="Course Description " />
                      <Row tag=" Course Name " value="Course Description " />
                      <Row tag=" Course Name " value="Course Description " />
                      <Row tag=" Course Name " value="Course Description " />
                      <div class="row">
                        <div class="col-sm-12">
                          <a class="btn btn-info " target="__blank" href="">
                            Add Course
                          </a>
                        </div>
                      </div>
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

import { Component } from "react";
import { connect } from "react-redux";

class S_ClassDetail extends Component {
  render() {
    return (
      <>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src=""
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              DigiClass
            </a>

            <div className="container justify-content-md-center">
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container ms-5">
          <div className="container card mt-4 ms-5 w-50 shadow-sm p-3 mb-3 bg-body border-secondary">
            <div className="card-body ">
              <div className="container sm-10">
                {/* <div className="row"> */}
                <div className="col display-6">
                  <b>React - The Complete Guide</b>
                </div>
                {/* </div> */}
              </div>
              <div className="container sm-10">
                <div className="row">
                  <div className="col display-7">
                    <b>Class_ID: </b>01234
                  </div>
                </div>
              </div>
              <div className="container-sm">
                <div className="row">
                  <div className="col display-7">
                    <b>Description:</b> This is the description of the course
                  </div>
                </div>
              </div>
              <div className="container text ">
                <span className="badge text-bg-warning ">Best Seller </span>
                <div className="d-inline p-1 text-danger">
                  <u>199 Reviews</u>
                </div>
              </div>
              <div className="container sm-10">
                <div className="row">
                  <div className="col display-7">
                    <h6>
                      <b>Teacher:</b> Monarch Hasija
                    </h6>
                  </div>
                </div>
              </div>
              <div className="container sm-10">
                <div className="row">
                  <div className="col display-7">
                    <h6>
                      <b>Standard:</b> 10th/11th/12th/B.E/M.E
                    </h6>
                  </div>
                </div>
              </div>

              <div className="container sm-10">
                <div className="row">
                  <div className="col display-7">
                    <h6>
                      <b>Timings:</b> 6.30 PM - 8.30 PM [ Monday to Friday ]
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container card w-50 ms-5 border-secondary">
            <div className="card-body">
              <h5 className="card-title">
                <b>What you'll learn</b>
              </h5>

              <p className="card-text d-inline">
                <ul>
                  <li>
                    Build powerful, fast, user-friendly and reactive web apps
                  </li>
                  <li>
                    Apply for high-paid jobs or work as a freelancer in one the
                    most-demanded sectors you can find in web dev right now
                  </li>
                  <li>
                    Provide amazing user experiences by leveraging the power of
                    JavaScript with ease
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* <div className="container card me-5 w-25 end-0 mt-0">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div> */}
        </div>

        {/* Student ClassDetail
        {this.props.name} */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.firstName,
  };
};

export default connect(mapStateToProps)(S_ClassDetail);

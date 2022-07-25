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
        <div className="container ms-5 me-5 ">
          <div className="card-deck"></div>
          <div className="container card mt-4 ms-5  shadow-sm p-3 mb-3 text-light bg-dark border-secondary rounded-0">
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
          <div className="container card w-50 ms-5 border-secondary rounded-0">
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
                  <li>
                   Learn all about React Hooks, React Components, Redux and lots of 
                   cool stuff with this react course 
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
          <div className="card w-25 float-right m-5 position-absolute top-50 start-50 rounded-0 shadow-sm translate-middle-x translate-middle-y border-light ">
            <div className="card">
              <img
                src="https://miro.medium.com/max/875/1*i3hzpSEiEEMTuWIYviYweQ.png"
                className="card-img-top shadow-lg border-3 rounded-0"
                alt="image here"
              />
              <div className="card-body">
                <div className="card-title d-inline">
                  <h2 className="d-inline">$25/</h2>
                  <h5 className="d-inline ">Month</h5>
                  <div className="d-inline p-2 text-muted">
                    <s>$50</s> <b>50% OFF</b>
                    <div className="text-danger">
                      <b>5 hours</b> left at this price!
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button className=" button1 btn btn-dark text-light rounded-0 btn-primary:hover" type="button">
                   <b>Message</b> 
                  </button>
                  <button className="button2 btn btn-light text-dark rounded-0 border border-dark border-5"  type="button">
                    <b>Enroll</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
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

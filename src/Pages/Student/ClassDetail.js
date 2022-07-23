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
            <div className="justify-content-md-center">
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

        
            <div className="container sm-10">
              <div className="row">
                <div className="col display-6">React - The Complete Guide</div>
                <br><div className="col display-7">Class_ID: 01234</div></br>
              </div>
            </div>
            <div className="container sm-10">
              <div className="row">
                <div className="col display-6">Desc - This is the course description</div>
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

import { Component } from "react";

class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       
            <div className="card1 p-1 card border border-1 border-dark text-left rounded-0 ">
              <div className="s_img">
                <img src={this.props.img} />
              </div>
              <div className="s_name">
                <p>
                  <b>SUBJECT :</b> {this.props.subject}
                </p>
              </div>
              <div className="s_details ">
                <p>
                  <b>TEACHER :</b> {this.props.Tname}
                </p>
                <p>
                  <b>CLASS TIMING : </b>
                  {this.props.c_timing}
                </p>
              </div>
            </div>
         
      </>
    );
  }
}

export default CourseCard;

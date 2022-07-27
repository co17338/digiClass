import { Component } from "react";

class AssignmentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       
            <div className="card1 container card w-25 text-left rounded-0">
              <div className="s_img">
                <img src={this.props.img} />
              </div>
              <div className="s_name ">
                <p>
                  <b>SUBJECT :</b> {this.props.subject}
                </p>
              </div>
              <div className="s_details ">
                <p>
                  <b>TEACHER :</b> {this.props.Tname}
                </p>
                <p>
                  <b>DUE Date: </b>
                  {this.props.DueDate}
                </p>
              </div>
            </div>
         
      </>
    );
  }
}

export default AssignmentCard;

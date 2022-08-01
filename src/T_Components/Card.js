import { Component } from "react";

class T_Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       
            <div className="card1 container card border border-1 border-dark p-1 text-left rounded-0">
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
                    <b>DAY:</b> {this.props.day}
                </p>
                <p>
                  <b>Class Timings: </b>
                  {this.props.ctiming}
                </p>
                <button className="button1" > Start Class</button>
              </div>
            </div>
         
      </>
    );
  }
}

export default T_Card;
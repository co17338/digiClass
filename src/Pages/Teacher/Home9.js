import { Component, useState } from "react";
import { connect } from "react-redux";
import "./tstyle.css";
import classList from "./classLists/ClassList9";
import T_Card from "../../T_Components/Card";
import { Standard9 } from "./classLists/ClassList9";
//vasu
const T_Home9 = () => {
  const [data, setdata] = useState(classList);
  return (
    <>
      <div className="container mt-2 ">
        <div className="s_header">
          <div className="card rounded-0 shadow-sm mt-4 mb-5">
            <div className="card-body">
              <h2 className="text-left d-inline">Standard: {Standard9}</h2>
              <button className=" button2 btn btn-primary d-inline rounded-0 ms-3 me-3">
              Create A Test 
              </button>
              <button className="button2 btn btn-primary d-inline rounded-0">
               Create An Assignment
              </button>
            </div>

            <section className="container">
              <div className="sclassdetails">
                {data.map((ele) => {
                  return (
                    <T_Card
                      ctiming={ele.ctiming}
                      day={ele.day}
                      subject={ele.subject}
                      img={ele.img}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

//const mapStateToProps = (state) => {
//	return {
//		name: state.user.firstName,
//	};

//};

//export default connect(mapStateToProps)(T_Home);
export default T_Home9;

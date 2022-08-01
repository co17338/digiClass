import { Component, useState } from "react";
import { connect } from "react-redux";
import "./tstyle.css";
import classList from "./classLists/ClassList7";
import T_Card from "../../T_Components/Card";
import { Standard7 } from "./classLists/ClassList7";
//vasu
const T_Home7 = () => {
  const [data, setdata] = useState(classList);
  return (
    <>
      <div className="container mt-2 ">
        <h1 className="text-left"> WELCOME, TEACHER</h1>
        <div className="s_header">
          <div className="card rounded-0 shadow-sm mt-4">
            <div className="card-body dinline">
              <h2 className="text-left d-inline">Standard: {Standard7}</h2>
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
export default T_Home7;

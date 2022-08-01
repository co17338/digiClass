import { Component, useState } from "react";
import { connect } from "react-redux";
import "./tstyle.css";
import classList from "./classLists/ClassList8";
import T_Card from "../../T_Components/Card";
import { Standard8 } from "./classLists/ClassList8";
//vasu
const T_Home8 = () => {
  const [data, setdata] = useState(classList);
  return (
    <>
      <div className="container mt-2 ">
        <div className="s_header">
          <div className="card rounded-0 shadow-sm mt-4">
            <div className="card-body">
              <h2 className="text-left d-inline">Standard: {Standard8}</h2>
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
export default T_Home8;

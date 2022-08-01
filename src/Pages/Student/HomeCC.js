import { Component, useState } from "react";
import { connect } from "react-redux";

import "./style.css";
import ClassList from "./ClassList";
import Navbar from "./Navbar.js";
import CourseCard from "../../S_Components/CourseCard";

const S_HomeCC= () => {
  var [data, setdata] = useState(ClassList);

  return (
    <>
      <div className="container mt-2 ">
        <div className="s_header">
          <div className="card rounded-0 shadow-sm">
            <div className="card-body">
              <h2 className="text-left">Upcoming Classes </h2>
            </div>
            

            <section className="container">
              <div className="sclassdetails">
                {data.map((ele) => {
                  return (
                    <CourseCard
                      c_timing={ele.c_timing}
                      Tname={ele.Tname}
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
//return {
//name: state.user.firstName,
//};

//};

//export default connect(mapStateToProps)(S_Home);
export default S_HomeCC;

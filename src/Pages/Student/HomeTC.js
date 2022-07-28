import { Component, useState } from "react";
import { connect } from "react-redux";
import "./style.css";
import TestCard from "../../Components/TestCard";
import testList from "./testList";

const S_HomeTC= () => {
  var [data, setdata] = useState(testList);

  return (
    <>
      <div className="container mt-2 ">
        <div className="s_header">
          <div className="card rounded-0 shadow-sm mt-4">
            <div className="card-body">
              <h2 className="text-left">Upcoming Tests </h2>
            </div>

            <section className="container">
              <div className="sclassdetails">
                {data.map((ele) => {
                  return (
                    <TestCard
                      TestDate={ele.TestDate}
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
export default S_HomeTC;

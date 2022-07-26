import {Component,useState} from "react";
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table"
import './style.css'
import ClassList from "./ClassList";
import Navbar from "./Navbar.js";
import CourseCard from "../../Components/CourseCard";

const S_Home=()=>{

    var [data,setdata]= useState(ClassList);

        return(
            
            <>
            <h1> Welcome , Vasu Goel</h1>
            <div className="container mt-2">
            <div className="s_header">
            <h2 className="text-center">Student Home Page </h2>
            
            </div>
            
            <section className="contain mt-3">
                <div className="sclassdetails">
                      {
                        data.map((ele)=>{
                            return(
                                <CourseCard c_timing={ele.c_timing}   Tname={ele.Tname}  subject={ele.subject}  img={ele.img}  />
                            )
                        })
                      }
                       
                                
                    </div>
            </section>

        </div>
        </>
        )
    }




//const mapStateToProps = (state) => {
	//return {
		//name: state.user.firstName,
	//};

//};

//export default connect(mapStateToProps)(S_Home);
export default S_Home;
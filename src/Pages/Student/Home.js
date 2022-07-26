import {Component,useState} from "react";
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table"
import './style.css'
import ClassList from "./ClassList";
import Navbar from "./Navbar.js";

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
                                <>
                    <div className="card">
                        <div className="s_img">
                            <img src={ele.img}/>
                        </div>
                        <div className = "s_name">
                            <p><b>SUBJECT :</b> {ele.subject}</p>
                        </div>
                        <div className="s_details">
                            <p><b>TEACHER :</b> {ele.Tname}</p>
                            <p><b>CLASS TIMING : </b>{ele.c_timing}</p>
                        </div>
                        </div>
                        </>
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
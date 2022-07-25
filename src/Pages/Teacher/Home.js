import {Component, useState} from "react";
import { connect } from 'react-redux';
import "./tstyle.css"
import classList from "./ClassList";
//vasu
const T_Home=()=>{
    const [data,setdata ] = useState(classList);
        return(
            <>
            
            <div className="container mt-2">
            <h2 className="text-center">Teacher Home Page </h2>

            <section className="contain mt-3">
                <div className="tclassdetails">
                    {
                      data.map((ele)=>{
                        return(
                            <>
                            <div className="teacher_card">
                        <div className="class">
                            <p><b>CLASS:</b>{ele.class}</p>
                        </div>
                        <div className = "s_name">
                            <p><b>SUBJECT :</b> {ele.subject}</p>
                        </div>
                        <div className="class_details">
                            <p><b>CLASS TIMING : </b>{ele.ctiming}</p>
                            <button >Post New assignment</button>
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
//	return {
//		name: state.user.firstName,
//	};

//};

//export default connect(mapStateToProps)(T_Home);
export default T_Home;
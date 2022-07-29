import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import {useSelector , useDispatch} from "react-redux";
import { SIGNUP } from '../../Redux/action';

const Signup = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState('');
    const [number , setNumber] = useState("");
    const [date, setDate] = useState("");
    
    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
      e.preventDefault();

      const userdata = dispatch(
           SIGNUP({
            name : name,
            email :email,
            password :password,
            number : number,
            DOB: date
           })   )
           console.log(userdata);
    }

     return(
    <>
    <section className='signup'>
                <form className='signup-form'onSubmit={(e)=>handleSubmit(e)}>
                    <h2 className='font-title'> Create New Account</h2>
                    <input type="name" placeholder ="Full-name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder ="Email Address"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder ="Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    
                    <input type="password" placeholder ="Confirm Password"value={cPassword} />
                    <input type="number" placeholder ="Mobile Number"value={number} onChange={(e)=>setNumber(e.target.value)}/>
                    <input type="date" placeholder ="DOB"value={date} onChange={(e)=>setDate(e.target.value)}/>
                    {/* <input type="radio" value={gender}> Male</input>
                    <input type="radio" value={gender}> Female</input> */}
                    <button type="submit" className='signup_btn'>Sign Up</button>  
                    

                    <div className='login-sec'>
                            <p>Already have an Account?
                            <NavLink to="/login" className="gologin">Login</NavLink> </p>
                        </div>
                        



                    
                    </form>
            
    </section>

    </>
    );
};

export default Signup;
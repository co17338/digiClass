import { useState } from 'react';
import './style.css'
import {useSelector , useDispatch} from "react-redux";
import {LOGIN} from '../../Redux/action'
import { NavLink } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
      e.preventDefault();
      alert("You have successfully logged in");

      const userdata = dispatch(
           LOGIN({
            email :email,
            password :password,
            loggedIn :true,
           })   )
           console.log(userdata);
    }

  return (
    <div className='login'>
    <form className='login_form'onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login Form</h1>
        <input type="email" placeholder ="Email Address"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder ="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit" className='submit_btn'>Login</button>   
        <br/> 
        
        <a href="#">Forgot Password?</a>
        <br/>
        <NavLink to="/signup" className="gologin">Create New Account</NavLink>

    </form>
    </div>

  );
};

export default Login;
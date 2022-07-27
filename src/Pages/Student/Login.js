import { useState } from 'react';
import './style.css'
import {useSelector , useDispatch} from "react-redux";
import {LOGIN} from '../../Redux/action'

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
      e.preventDefault();
      alert("You have successfully logged in");

      const userdata = dispatch(
           LOGIN({
            name:name,
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
        <input type="name" placeholder ="Username" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder ="Email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder ="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit" className='submit_btn'>Login</button>   
        <br/> 
        
        <a href="#">Forgot Password?</a>
        <br/>
        <a href="#">Create New Account</a>

    </form>
    </div>

  );
};

export default Login;
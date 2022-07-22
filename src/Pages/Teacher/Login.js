import {Component} from "react";
import { connect } from 'react-redux';
//sahil
class T_Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin:true,
            "username":"",
            "password":""
        }
    }

    handleusername = (event) =>{
        this.setState({"username":event.target.value})
    }

    handlepassword = (event) =>{
        this.setState({"password":event.target.value})
    }

    render(){
        return(
            <>
                { this.state.isLogin && <p>Login</p>}  
                { !this.state.isLogin && <p>Signup</p>}

                <button  onClick={()=>this.setState({isLogin: !(this.state.isLogin)  })}>Toggle</button>
               <br/><br/><br/><br/>
                                {/* {this.setState({isLogin:false})} */}
                Teacher Login<br/>
                username<input type="text" onChange={this.handleusername} label="username" /><br/>
                password<input type="password" onChange={this.handlepassword} label="password" />

            </>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		name: state.user.firstName,
	};

};

export default connect(mapStateToProps)(T_Login);
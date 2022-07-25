import {Component} from "react";
import { connect } from 'react-redux';
//sahil
class T_Login extends Component{
    render(){
        return(
            <>
                Teacher Login
                {this.props.name}
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
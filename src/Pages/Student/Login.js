import {Component} from "react";
import { connect } from 'react-redux';

class S_Login extends Component{
    render(){
        return(
            <>
                Student Login
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

export default connect(mapStateToProps)(S_Login);
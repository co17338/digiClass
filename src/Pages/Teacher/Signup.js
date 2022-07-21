import {Component} from "react";
import { connect } from 'react-redux';

class T_Signup extends Component{
    render(){
        return(
            <>
                Teacher Sign up
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

export default connect(mapStateToProps)(T_Signup);
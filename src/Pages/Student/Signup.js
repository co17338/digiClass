import {Component} from "react";
import { connect } from 'react-redux';

class S_Signup extends Component{
    render(){
        return(
            <>
                Student Sign up
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

export default connect(mapStateToProps)(S_Signup);
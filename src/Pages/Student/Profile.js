import {Component} from "react";
import { connect } from 'react-redux';

class S_Profile extends Component{
    render(){
        return(
            <>
                Student Profile
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

export default connect(mapStateToProps)(S_Profile);
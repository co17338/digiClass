import {Component} from "react";
import { connect } from 'react-redux';
//ishita
class T_Profile extends Component{
    render(){
        return(
            <>
                Teacher Profile
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

export default connect(mapStateToProps)(T_Profile);
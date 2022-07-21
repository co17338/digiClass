import {Component} from "react";
import { connect } from 'react-redux';

//rahul

class T_ClassDetail extends Component{
    render(){
        return(
            <>
                teacher ClassDetail
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

export default connect(mapStateToProps)(T_ClassDetail);
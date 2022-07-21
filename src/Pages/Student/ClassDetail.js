import {Component} from "react";
import { connect } from 'react-redux';

class S_ClassDetail extends Component{
    render(){
        return(
            <>
                Student ClassDetail
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

export default connect(mapStateToProps)(S_ClassDetail);
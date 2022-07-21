import {Component} from "react";
import { connect } from 'react-redux';

class CreateClass extends Component{
    render(){
        return(
            <>
                CreateClass
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

export default connect(mapStateToProps)(CreateClass);
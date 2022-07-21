import {Component} from "react";
import { connect } from 'react-redux';

class S_Home extends Component{
    render(){
        return(
            <>
                Student Home
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

export default connect(mapStateToProps)(S_Home);
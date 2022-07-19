import {Component} from "react";
import { connect } from 'react-redux';

class Home extends Component{
    render(){
        return(
            <>Home</>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		phoneNo: state.phoneNo,
		otp: state.otp
	};

};

export default connect(mapStateToProps)(Home);
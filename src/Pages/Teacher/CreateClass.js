import {Component} from "react";
import { connect } from 'react-redux';

class CreateClass extends Component{

    constructor(props){
        super(props);
        this.state={
            "className":"",
            "hostId":"",
            "timeFrom":"",
            "timeTo":"",
            "days":[0,0,0,0,0,0,0],
            "desc":"",
        }
    }

    render(){
        return(
            <>
                CreateClass
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
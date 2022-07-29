//import { Types } from './types';

//const initialState = {
	//user: {
	//	userId:'',
	//	firstName: 'Monarch',
	//	lastName: '',
	//	phoneNo: '',
	//	email: '',
	//}
//}


//const reducer = (state = initialState, action) => {
//	switch (action.type) {
//		case Types.SAVE_USER:
//			return {
//				...state,
//				user: action.payload
		//	}
//		default:
//			return state;
//	}
//}

const INIT_STATE ={
    user:null
};

export const userreducer =(state = INIT_STATE,action)=>{
    switch(action.type){
        case "LOGIN_USER":
            return{
                ...state,
                user: action.payload
            }

        case "LOGOUT_USER":
            return{
                ...state,
                user:null,
            }
            
            
        case "SIGNUP_USER":
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

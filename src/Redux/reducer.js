import { Types } from './types';

const initialState = {
	user: {
		userId:'',
		firstName: 'Monarch',
		lastName: '',
		phoneNo: '',
		email: '',
		address :''
	}
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.SAVE_USER:
			return {
				...state,
				user: action.payload
			}
		default:
			return state;
	}
}

export default reducer;
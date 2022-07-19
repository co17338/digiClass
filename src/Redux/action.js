import { Types } from './types';

export const ActionCreators = {

  saveUser: (user) => ({ type: Types.SAVE_USER, payload: { user } }),  

}
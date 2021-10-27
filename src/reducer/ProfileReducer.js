
import {
  PROFILE_DATA,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_FAIL,
} from '../action/types';

const INITIAL_STATE = {
  data: {},
  message: '',
  loading: false
};

const profileReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return { ...state, loading: true, message: 'Profile data loading' };
    case PROFILE_DATA_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };
    case PROFILE_DATA_FAIL:
      return { ...state, message: 'Profile data could not fatch!', loading: false };

    default:
      return state;
  }
};

export default profileReducer;
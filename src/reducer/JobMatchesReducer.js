import {
  JOB_MATCHES,
  JOB_MATCHES_SUCCESS, JOB_MATCHES_FAIL
} from '../action/types';

const INITIAL_STATE = {
  data: [],
  message: '',
  loading: false
};

const jobMatches= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Plannets 
    case JOB_MATCHES:
      return { ...state, loading: true, message: 'Job list loading' };
    case JOB_MATCHES_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };
    case JOB_MATCHES_FAIL:
      return { ...state, message: 'Job list data could not fatch!', loading: false };

    default:
      return state;
  }
};

export default jobMatches;
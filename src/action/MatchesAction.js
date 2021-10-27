import {
  JOB_MATCHES,
  JOB_MATCHES_SUCCESS, JOB_MATCHES_FAIL
} from './types';
import { MATCHES } from '../helper/Constants';
import { CallAPI } from '../helper/ApiService';

/**
 * API call to Job Matches
 */
export const onJobMatches = () => (dispatch) => {
  dispatch({ type: JOB_MATCHES });
  const config = {
    url: MATCHES,
    method: 'GET',
  };
  CallAPI(config, respnse => onMatchSuccess(dispatch, respnse), error => onMatchError(dispatch, error));
};

/**
 * API request success callback function
 */
const onMatchSuccess = (dispatch, response) => {
  if (response && response.data && (response.status === 200 || response.status === 201)) {
    dispatch({
      type: JOB_MATCHES_SUCCESS,
      payload: response.data || []
    });
  }
}

/**
 * API request error callback function
 */
const onMatchError = (dispatch, error) => {
  dispatch({ type: JOB_MATCHES_FAIL });
  console.log('onError: ', error);
}

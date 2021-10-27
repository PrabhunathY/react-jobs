

import {
  PROFILE_DATA_FAIL,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA,
} from './types';
import { PROFILE } from '../helper/Constants';
import { CallAPI } from '../helper/ApiService';

/**
 * API call to get profile data
 */
export const getProfile = () => (dispatch) => {
  dispatch({ type: PROFILE_DATA });
  const config = {
    url: PROFILE,
    method: 'GET',
  };
  CallAPI(config,
    respnse => onProfileSuccess(dispatch, respnse),
    error => onProfileError(dispatch, error)
  );
};

/**
 * API request success callback function
 */
const onProfileSuccess = (dispatch, response) => {
  if (response && response.data && (response.status === 200 || response.status === 201)) {
    dispatch({
      type: PROFILE_DATA_SUCCESS,
      payload: response.data || {}
    });
  }
}

/**
 * API request error callback function
 */
const onProfileError = (dispatch, error) => {
  dispatch({ type: PROFILE_DATA_FAIL });
  console.log('onError: ', error);
}
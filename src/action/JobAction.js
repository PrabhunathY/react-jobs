
import { JOb } from '../helper/Constants';
import { CallAPI } from '../helper/ApiService';

/**
 * API call to JObaction
 */
export const acceptJob = (jobId, res, error) => {
  const endPoint=`${JOb}/${jobId}/accept`;
  const config = {
    url: endPoint,
    method: 'GET',
  };
  CallAPI(config,
    respnse => res(respnse),
    err => error(err)
  );
};

export const rejectJob = (jobId, res, error) => {
  const endPoint=`${JOb}/${jobId}/reject`;
  const config = {
    url: endPoint,
    method: 'GET',
  };
  CallAPI(config,
    respnse => res(respnse),
    err => error(err)
  );
};
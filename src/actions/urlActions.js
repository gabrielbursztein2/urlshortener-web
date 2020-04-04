import appService from '../services/appService';

import {
  CREATE_URL,
  CREATE_URL_SUCCESS
} from './actionTypes';

export const createUrl = url => async dispatch => {
  dispatch({ type: CREATE_URL })
  try {
    const { data: { short_url: shortUrl } } = await appService.createUrl(url);
    dispatch({ type: CREATE_URL_SUCCESS, payload: { shortUrl } });
  } catch (err) {
    console.log(err);
  }
}

import appService from '../services/appService';

import {
  CREATE_URL,
  CREATE_URL_SUCCESS,
  CREATE_URL_FAIL,
  GET_TOP_URL,
  GET_TOP_URL_SUCCESS,
  GET_TOP_URL_FAIL,
  REFRESH_SHORT_URL
} from './actionTypes';

export const createUrl = url => async dispatch => {
  dispatch({ type: CREATE_URL })
  try {
    const { data: { shortUrl } } = await appService.createUrl(url);
    dispatch({ type: CREATE_URL_SUCCESS, payload: { shortUrl } });
  } catch (error) {
    dispatch({ type: CREATE_URL_FAIL, payload: { error }});
    console.log(error);
  }
}

export const getTopUrl = () => async dispatch => {
  dispatch({ type: GET_TOP_URL })
  try {
    const { data: { topUrl } } = await appService.getTopUrl();
    dispatch({ type: GET_TOP_URL_SUCCESS, payload: { topUrl } });
  } catch (error) {
    dispatch({ type: GET_TOP_URL_FAIL, payload: { error }});
  }
}

export const refreshShortUrl = () => dispatch => {
  dispatch({ type: REFRESH_SHORT_URL })
}

import {
  CREATE_URL,
  CREATE_URL_SUCCESS,
  CREATE_URL_FAIL,
  GET_TOP_URL,
  GET_TOP_URL_SUCCESS,
  GET_TOP_URL_FAIL,
  REFRESH_SHORT_URL
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
  shortUrl: '',
  topUrl: [],
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_URL:
      return {
        ...state,
        loading: true,
      };
    case CREATE_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        shortUrl: action.payload.shortUrl,
        error: "",
      };
    case GET_TOP_URL:
      return {
        ...state,
        loading: true,
        topUrl: [],
      };
    case GET_TOP_URL_SUCCESS:
      return {
        ...state,
        loading: true,
        topUrl: action.payload.topUrl,
      };
    case CREATE_URL_FAIL:
    case GET_TOP_URL_FAIL:
      return {
        loading: false,
        topUrl: [],
        shortUrl: undefined,
        error: action.payload.error.message,
      };
    case REFRESH_SHORT_URL:
      return {
        ...state,
        shortUrl: undefined
      }
    default:
      return state;
  }
};

export default urlReducer;

import {
  CREATE_URL,
  CREATE_URL_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  shortUrl: ''
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_URL:
      return {
        loading: true,
        shortUrl: ''
      }
    case CREATE_URL_SUCCESS:
      console.log(action);
      return {
        loading: false,
        shortUrl: action.payload.shortUrl,
        error: '',
      }
    default:
      return state;
  }
}

export default urlReducer;

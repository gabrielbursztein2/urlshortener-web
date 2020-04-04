import axios from 'axios';
import humps from 'humps';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();
const API_URL = env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  transformResponse: [...axios.defaults.transformResponse, data => humps.camelizeKeys(data)],
  transformRequest: [data => humps.decamelizeKeys(data), ...axios.defaults.transformRequest],
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

class AppService {
  static createUrl = url => 
    instance.post(
      '/urls',
      { url }
    );

  static getTopUrl = () => instance.get('/urls', { data: {} });
}

export default AppService;

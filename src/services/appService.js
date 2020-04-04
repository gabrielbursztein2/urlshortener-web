import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  
});

class AppService {
  static createUrl = url => 
    instance.post(
      'http://localhost:3000/api/v1/urls',
      { url },
      { headers: { 'accept': 'application/json', 'content-type': 'application/json' } }
    );
}

export default AppService;

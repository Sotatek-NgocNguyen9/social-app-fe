import axios from 'axios';
import { API_URL } from './common.constants';
export default axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json'
  }
});

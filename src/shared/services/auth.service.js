import axios from 'axios';
import { BE, ROUTES } from '../constants';

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token
  ? `Bearer ${token}`
  : null;
axios.defaults.baseURL = BE;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const authService = {
  async signUp(userData) {
    const { data } = await axios.post(ROUTES.SIGN_UP, userData);
    const { token } = data;
    if (token) {
      this.setToken(token);
    }
  },

  async signIn(userData) {
    const { data } = await axios.post(ROUTES.SIGN_IN, userData);
    const { token } = data;
    if (token) {
      this.setToken(token);
    }
  },

  signOut() {
    this.removeToken();
  },

  isAuthorized() {
    return !!this.getToken();
  },

  getToken() {
    return localStorage.getItem('token');
  },

  setToken(token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  removeToken() {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
  }
};

export const authService = {
  signUp(userData) {
    console.log(userData);
  },

  signIn(username, password) {
    console.log('signing in');
  },

  signOut() {
    localStorage.removeItem('token');
  },

  isAuthorized() {
    return !!this.getToken();
  },

  getToken() {
    return localStorage.getItem('token');
  },

  setToken(token) {
    localStorage.setItem('token', token);
  }
};

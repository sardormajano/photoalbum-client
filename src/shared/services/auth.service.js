export const authService = {
  signUp(userData) {
    console.log(`signing up ${JSON.stringify(userData)}`);
  },

  signIn(userData) {
    console.log(`signing in ${JSON.stringify(userData)}`);
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

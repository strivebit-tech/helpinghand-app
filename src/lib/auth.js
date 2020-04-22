const auth = {
  isAuthenticated: () => localStorage.getItem("helpinghands-auth"),

  setAuthentication: data => localStorage.setItem("helpinghands-auth", data),

  clearAuth: () => localStorage.removeItem("helpinghands-auth"),

  setAPIToken: authtoken => localStorage.setItem("auth_token", authtoken),

  getAPIAuthToken: () => localStorage.getItem("auth_token")
};

export default auth;

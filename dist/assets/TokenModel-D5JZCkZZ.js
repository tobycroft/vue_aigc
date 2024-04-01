class TokenModel {
  static Api_set_uidAndToken(uid, token) {
    localStorage.setItem("uid", uid);
    localStorage.setItem("token", token);
  }
  static Api_clear_uidAndToken() {
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
  }
  static Api_find_uidAndToken() {
    return { uid: localStorage.getItem("uid"), token: localStorage.getItem("token") };
  }
  static Api_find_uid() {
    return localStorage.getItem("uid");
  }
  static Api_find_token() {
    return localStorage.getItem("token");
  }
  static Api_is_login() {
    return localStorage.getItem("uid") != null && localStorage.getItem("token") != null;
  }
}
export {
  TokenModel as T
};
//# sourceMappingURL=TokenModel-D5JZCkZZ.js.map

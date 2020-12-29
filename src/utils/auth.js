import * as Cookies from "js.cookie";
const TokenKey = "x-access-token";
var inFifteenMinutes = new Date(
  new Date().getTime() + (7 * 24 - 8) * 60 * 60 * 1000
);
export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: inFifteenMinutes });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

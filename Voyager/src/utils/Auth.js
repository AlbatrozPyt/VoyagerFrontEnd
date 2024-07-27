import { decode, encode } from "base-64";
import { jwtDecode } from "jwt-decode";

if (!global.atob) {
  global.atob = decode;
}

if (!global.btoa) {
  global.btoa = encode;
}

export const DecodeToken = (token) => {
  const userToken = token;

  const decoded = jwtDecode(userToken);

  return decoded;
};

import { LOG_IN, LOG_OUT } from "./actionTypes";

let init = {
  token: sessionStorage.getItem("Auth Token") || "",
  log: sessionStorage.getItem("Auth Token") && true,
};

export const LoginReducer = (store = init, { type }) => {
  switch (type) {
    case LOG_IN:
      return {
        token: sessionStorage.getItem("Auth Token"),
        log: true,
      };
    case LOG_OUT: {
      sessionStorage.removeItem("Auth Token");
      return {
        token: "",
        log: true,
      };
    }
    default:
      return store;
  }
};

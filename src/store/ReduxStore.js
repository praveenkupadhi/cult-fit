import { createStore } from "redux";
import { LoginReducer } from "./login/loginReducer";

export const ReduxStore = createStore(LoginReducer);

import { createStore } from "redux";
import { loginReducer } from "./login/loginReducer";

const ReduxStore = createStore(loginReducer);

console.log(ReduxStore.getState());

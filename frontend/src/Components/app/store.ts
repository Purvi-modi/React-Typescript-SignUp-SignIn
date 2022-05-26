import { createStore } from "redux";
import { Reducer } from "./LoginReducer";

export const loginStore = createStore(Reducer);

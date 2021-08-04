import { combineReducers, createStore } from "redux";

import modalAppearance from "./modalAppearance";
import modalTitle from "./modalName";

const reducers = combineReducers({ modalAppearance, modalTitle });

const store = createStore(reducers);

export default store;

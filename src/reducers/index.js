import { combineReducers, createStore } from "redux";

import modalAppearance from "./modalAppearance";
import modalTitle from "./modalName";
import projectData from "./projectData";

const reducers = combineReducers({ modalAppearance, modalTitle, projectData });

const store = createStore(reducers);

export default store;

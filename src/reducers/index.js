import { combineReducers } from "redux";

import modalAppearance from "./modalAppearance";
import modalTitle from "./modalName";
import projectData from "./projectData";

const reducers = combineReducers({ modalAppearance, modalTitle, projectData });

export default reducers;

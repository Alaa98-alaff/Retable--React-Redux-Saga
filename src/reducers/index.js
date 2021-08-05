import { combineReducers } from "redux";

import modalAppearance from "./modalAppearance";
import projectData from "./projectData";

const reducers = combineReducers({ modalAppearance, projectData });

export default reducers;

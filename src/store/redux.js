import { createStore } from "redux";

const initialStates = { addWorkspace: "Add New Workspace" };

// Reducer Function
const reducer = (state = initialStates, action) => {
  if (action.type === "add new workspace") {
    return { addWorkspace: "WORKING!!!" };
  }

  return state;
};

const store = createStore(reducer);

export default store;

import { createStore } from "redux";

const initialStates = { openModal: false };

// Reducer Function
const Modalreducer = (state = initialStates, action) => {
  if (action.type === "open modal") {
    return { openModal: true };
  }

  return state;
};

const store = createStore(Modalreducer);

export default store;

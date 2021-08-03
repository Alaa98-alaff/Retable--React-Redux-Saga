import { createStore } from "redux";

const initialStates = { openModal: false };

// Reducer Function
const Modalreducer = (state = initialStates, action) => {
  if (action.type === "open modal") {
    return { openModal: true };
  }

  if (action.type === "close modal") {
    return { openModal: false };
  }

  return state;
};

const store = createStore(Modalreducer);

export default store;

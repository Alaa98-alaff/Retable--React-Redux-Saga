import { createStore } from "redux";

const initialStates = { openModal: false, modalTitle: "" };

// Reducer Function
const Modalreducer = (state = initialStates, action) => {
  if (action.type === "open modal") {
    return { openModal: true, modalTitle: "" };
  }

  if (action.type === "close modal") {
    return { openModal: false, modalTitle: "" };
  }

  if (action.type === "naming modal") {
    return { modalTitle: action.value, openModal: true };
  }

  return state;
};

const store = createStore(Modalreducer);

export default store;

const initialState = { modalTitles: "" };

const modalTitle = (state = initialState, action) => {
  if (action.type === "MODAL_NAMING") {
    return { ...state, modalTitles: action.value };
  }
  return state;
};

export default modalTitle;

const initialState = { openModal: false, modalTitles: "" };

const modalAppearance = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, openModal: true, modalTitles: action.value };
    case "CLOSE_MODAL":
      return { ...state, openModal: false };
    default:
      return state;
  }
};

export default modalAppearance;

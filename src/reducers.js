import { CHANGE_SEARCHFIELD } from "./constants";

const initialState = {
  searchField: "",
};

export const searchUsers = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

import {
  CHANGE_SEARCHFIELD,
  REQUEST_INITIAL_USERS_PENDING,
  REQUEST_INITIAL_USERS_SUCCESS,
  REQUEST_INITIAL_USERS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchUsers = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateUsers = {
  isPending: false,
  users: [],
  error: "",
};
export const requestUsers = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_INITIAL_USERS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_INITIAL_USERS_SUCCESS:
      return { ...state, users: action.payload, isPending: false };

    case REQUEST_INITIAL_USERS_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};

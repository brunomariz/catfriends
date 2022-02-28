import {
  CHANGE_SEARCHFIELD,
  REQUEST_INITIAL_USERS_PENDING,
  REQUEST_INITIAL_USERS_SUCCESS,
  REQUEST_INITIAL_USERS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestInitialUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_INITIAL_USERS_PENDING });
  fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((data) => {
      const parsedUsers = data.results.map((item) => {
        return { username: item.name };
      });
      dispatch({
        type: REQUEST_INITIAL_USERS_SUCCESS,
        payload: parsedUsers,
      });
    })
    .catch((err) =>
      dispatch({ type: REQUEST_INITIAL_USERS_FAILED, payload: err })
    );
};

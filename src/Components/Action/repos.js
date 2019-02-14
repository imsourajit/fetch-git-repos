import {
  GET_REPOS,
  GET_REPOS_SUCCEEDED,
  GET_REPOS_FAILED,
  SEARCH_REPO
} from "./types";

export const getRepositories = () => {
  return dispatch => {
    dispatch({ type: GET_REPOS });
    return fetch("https://api.github.com/users/supreetsingh247/repos")
      .then(response => response.json())
      .then(res => {
        return dispatch({
          type: GET_REPOS_SUCCEEDED,
          payload: {
            repos: res
          }
        });
      })
      .catch(err =>
        dispatch({
          type: GET_REPOS_FAILED
        })
      );
  };
};

export const searchRepositories = text => {
  return {
    type: SEARCH_REPO,
    payload: {
      searchText: text
    }
  };
};

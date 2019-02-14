import {
  GET_REPOS,
  GET_REPOS_SUCCEEDED,
  GET_REPOS_FAILED,
  SEARCH_REPO
} from "@action/types";

const initialState = {
  repos: [],
  isFetching: false
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        isFetching: true
      };
      break;

    case GET_REPOS_SUCCEEDED:
      return {
        ...state,
        repos: action.payload.repos,
        isFetching: false
      };
      break;

    case GET_REPOS_FAILED:
      return {
        ...state,
        isFetching: false
      };
      break;

    case SEARCH_REPO: {
      return {
        ...state,
        repos: state.repos.filter(
          repo =>
            repo.name
              .toLowerCase()
              .indexOf(action.payload.searchText.toLowerCase()) > -1
        )
      };
    }

    default:
      return state;
  }
};

export default reposReducer;

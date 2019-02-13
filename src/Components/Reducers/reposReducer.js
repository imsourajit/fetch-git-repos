import { GET_REPOS } from "@action/repos";

const initialState = {
  repos: []
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: ["munna"]
      };
      break;

    default:
      return state;
  }
};

export default reposReducer;

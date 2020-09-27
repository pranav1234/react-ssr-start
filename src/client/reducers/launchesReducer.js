import { FETCH_LAUNCH } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LAUNCH:
      return action.payload.data;
    default:
      return state;
  }
};

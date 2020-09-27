import axios from "axios";

export const FETCH_LAUNCH = "fetch_launch";
export const fetchLaunch = (route) => async (dispatch) => {
  const res = await axios.get(`https://api.spacexdata.com/v3/launches${route}`);

  dispatch({
    type: FETCH_LAUNCH,
    payload: res,
  });
};

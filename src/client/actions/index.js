import axios from "axios";

export const FETCH_LAUNCH = "fetch_launch";
export const fetchLaunch = (searchParams) => async (dispatch) => {
  let url = "";
  if (searchParams) {
    url = `/launches${searchParams}`;
  } else {
    url = `/launches?limit=50`;
  }
  const res = await axios.get(`https://api.spacexdata.com/v3${url}`);

  dispatch({
    type: FETCH_LAUNCH,
    payload: res,
  });
};

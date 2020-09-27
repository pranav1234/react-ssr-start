import React from "react";
import { connect } from "react-redux";
import { fetchLaunch } from "../actions";

const Home = (props) => {
  console.log("props:-------- ", props);
  return (
    <div>
      <div>I'm the VERY VERY BEST home component</div>
      <button onClick={() => console.log("Hi there!")}>Press me!</button>
    </div>
  );
};
function loadData(store, route) {
  return store.dispatch(fetchLaunch(route.search));
}

function mapStateToProps(state) {
  return { launches: state.launches };
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchLaunch })(Home),
};

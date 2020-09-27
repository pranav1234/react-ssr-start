import React from "react";
import { connect } from "react-redux";
import { fetchLaunch } from "../actions";
import { Button, Container, AppBar, Typography } from "@material-ui/core";

const Home = (props) => {
  console.log("props:-------- ", props);
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6">SpaceX Launch Programs</Typography>
      </AppBar>
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

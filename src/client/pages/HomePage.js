import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchLaunch } from "../actions";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import Filters from "../components/Filters";
import LaunchCards from "../components/LaunchCards";

const Home = ({ launches: serverLaunches }) => {
  const [launches, setLaunches] = useState(serverLaunches);
  const [selectedYear, setSelectedYear] = useState("");
  const [isLaunchSuccessFilter, setIsLaunchSuccessFilter] = useState("");
  const onYearSearch = (year) => {};
  const onSuccessLaunchSearch = (isLaunchSuccessSearch) => {};

  return (
    <div>
      <Header />
      <Grid container>
        <Grid xs={12} md={2} item>
          <Filters
            onYearSearch={onYearSearch}
            selectedYear={selectedYear}
            onSuccessLaunchSearch={onSuccessLaunchSearch}
            isLaunchSuccessFilter={isLaunchSuccessFilter}
          />
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid className="space-launch-container" spacing={3} container>
            <LaunchCards launches={launches} />
          </Grid>
        </Grid>
      </Grid>
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

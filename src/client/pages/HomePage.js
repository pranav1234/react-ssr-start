import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLaunch } from "../actions";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import Filters from "../components/Filters";
import LaunchCards from "../components/LaunchCards";
import queryString from "query-string";

const Home = ({ launches: serverLaunches, history, fetchLaunch }) => {
  const [launches, setLaunches] = useState(serverLaunches);
  const [selectedYear, setSelectedYear] = useState("");
  const [isLaunchSuccessFilter, setIsLaunchSuccessFilter] = useState("");
  const onYearSearch = (year) => {
    let params = queryString.parse(location.search);
    let searchParams = { ...params, launch_year: year };
    history.push({ search: queryString.stringify(searchParams) });
    fetchLaunch("?" + queryString.stringify(searchParams));
  };
  useEffect(() => {
    setLaunches(serverLaunches);
  }, [serverLaunches]);
  const onSuccessLaunchSearch = (isLaunchSuccessSearch) => {
    let params = queryString.parse(location.search);
    let searchParams = { ...params, launch_success: isLaunchSuccessSearch };
    history.push({ search: queryString.stringify(searchParams) });
    fetchLaunch("?" + queryString.stringify(searchParams));
  };

  return (
    <div>
      <Header />
      <div className={"container--fluid container__row"}>
        <div
          style={{ marginTop: 10 }}
          className={"container__col-sm-2 container__col-xs-12"}
        >
          <Filters
            onYearSearch={onYearSearch}
            selectedYear={selectedYear}
            onSuccessLaunchSearch={onSuccessLaunchSearch}
            isLaunchSuccessFilter={isLaunchSuccessFilter}
          />
        </div>
        <div className={"container__col-sm-10 container__col-xs-12"}>
          <LaunchCards launches={launches} />
        </div>
      </div>
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

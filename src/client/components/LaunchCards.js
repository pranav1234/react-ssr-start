import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import LaunchCard from "./LaunchCard";

const LaunchCards = ({ launches }) => (
  <div className="container__row">
    {launches.map(
      ({
        mission_name,
        links: { mission_patch_small },
        flight_number,
        mission_id,
        launch_year,
        launch_success,
        launch_landing,
      }) => {
        return (
          <div
            className={
              "container__col-sm-3-10 container__col-xs-12-10   launchCard__wrapper"
            }
          >
            <LaunchCard
              mission_patch_small={mission_patch_small}
              mission_name={mission_name}
              flight_number={flight_number}
              mission_id={mission_id}
              launch_year={launch_year}
              launch_success={launch_success}
              launch_landing={launch_landing}
            />
          </div>
        );
      }
    )}
  </div>
);

export default LaunchCards;

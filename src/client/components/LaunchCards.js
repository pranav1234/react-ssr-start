import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import LaunchCard from "./LaunchCard";

const LaunchCards = ({ launches }) => (
  <Grid className="space-launch-container" spacing={3} container>
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
          <Grid key={flight_number} xs={12} md={3} sm={6} item>
            <LaunchCard
              mission_patch_small={mission_patch_small}
              mission_name={mission_name}
              flight_number={flight_number}
              mission_id={mission_id}
              launch_year={launch_year}
              launch_success={launch_success}
              launch_landing={launch_landing}
            />
          </Grid>
        );
      }
    )}
  </Grid>
);

export default LaunchCards;

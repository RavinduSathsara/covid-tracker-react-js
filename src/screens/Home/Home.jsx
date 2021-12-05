import React from "react";
import CasesControlCard from "../../components/CasesControlCard/CasesControlCard";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import LinearBuffer from "../../components/LinearBuffer/LinearBuffer";
import MultiActionAreaCard from "../../components/MultiActionAreaCard/MultiActionAreaCard";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GloblectionAreaCard from "../../components/GlobleActionAreaCard/GlobleActionAreaCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState({
    data: {
      update_date_time: "2021-12-04 22:04:49",
      local_new_cases: 7400000,
      local_total_cases: 566936,
      local_total_number_of_individuals_in_hospitals: 9536,
      local_deaths: 14440,
      local_new_deaths: 21,
      local_recovered: 542010,
      local_active_cases: 10486,
      global_new_cases: 510016,
      global_total_cases: 249461042,
      global_deaths: 5047622,
      global_new_deaths: 7456,
      global_recovered: 225913434,
      total_pcr_testing_count: 5694513,
    },
  });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LinearBuffer />;
  } else {
    return (
      <div>
        <Grid container spacing={5}>
          <Grid item xs>
            <CasesControlCard
              local_new_cases={items.data.local_new_cases}
              local_new_deaths={items.data.local_new_deaths}
              update_date_time={items.data.update_date_time}
            />
          </Grid>
          <Grid item xs>
            <MultiActionAreaCard
              local_total_cases={items.data.local_total_cases}
              local_deaths={items.data.local_deaths}
              update_date_time={items.data.update_date_time}
              local_recovered={items.data.local_recovered}
            />
          </Grid>
          <Grid item xs>
            <GloblectionAreaCard
              global_new_cases={items.data.global_new_cases}
              global_total_cases={items.data.global_total_cases}
              global_recovered={items.data.global_recovered}
              update_date_time={items.data.update_date_time}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Home;

import React from "react";
import CasesControlCard from "../../components/CasesControlCard/CasesControlCard";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import LinearBuffer from "../../components/LinearBuffer/LinearBuffer";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(2);
  const [items, setItems] = useState({
    data: {
      update_date_time: "2021-12-04 22:04:49",
      local_new_cases: 740,
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
        {/* <Button variant="contained" onClick={setCount(count + 1)}>
          Contained
        </Button> */}
        {count === 1 ? (
          " Click to view "
        ) : (
          <CasesControlCard
            local_new_cases={items.data.local_new_cases}
            update_date_time={items.data.update_date_time}
          />
        )}
      </div>
    );
  }
};

export default Home;

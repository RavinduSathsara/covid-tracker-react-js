import React from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import Home from "./screens/Home/Home";

//import MUi
import CssBaseline from "@mui/material/CssBaseline";

import LinearProgress from "@mui/material/LinearProgress";

import Container from "@mui/material/Container";

const App = () => {
  return (
    <div>
      <CssBaseline />

      <ButtonAppBar />
      <LinearProgress />
      <Container fixed>
        <Home />
      </Container>
    </div>
  );
};

export default App;

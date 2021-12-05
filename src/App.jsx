import React from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import Home from "./screens/Home/Home";

//import MUi
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

const App = () => {
  return (
    <div>
      <CssBaseline /> <ButtonAppBar />
      <Container fixed>
        <Home />
      </Container>
    </div>
  );
};

export default App;

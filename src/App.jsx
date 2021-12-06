import React from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import Home from "./screens/Home/Home";

//import MUi
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <div>
      <CssBaseline />

      <ButtonAppBar />
      <LinearProgress />
      <Container fixed>
        <Home />
        <footer
          style={{
            padding: "60px 0",
          }}
        >
          <Typography variant="h6" align="center">
            Covid 19 Tracker
          </Typography>
          <Typography
            style={{ margin: "5px" }}
            variant="subtitle1"
            align="center"
            color="textSecondary"
          >
            <CopyrightIcon fontSize="small" /> Ravindu Sathsara
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default App;

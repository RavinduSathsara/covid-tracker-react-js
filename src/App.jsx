import React from "react";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import Home from "./screens/Home/Home";

//import MUi
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <div>
      <CssBaseline />

      <ButtonAppBar />
      <LinearProgress />
      <Container fixed>
        <Home />
        <Typography
          sx={{ p: 10 }}
          variant="body2"
          color="text.secondary"
          align="center"
        >
          {"Copyright © "}
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/ravindu-sathsara-a588aa218/"
          >
            Ravindu Sathsara
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
};

export default App;

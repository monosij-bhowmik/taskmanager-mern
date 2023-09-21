import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import { CssBaseline, Grid, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import TaskItem from "./components/taskItem";
import TaskTab from "./components/tasksTab";
function App() {
  const appTheme = createTheme({
    palette: {
      background: {
        default: "#91A8D0",
      },
    },
  });
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <div className="App">
        <Grid
          container
          spacing={0}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ minHeight: "100vh", p: 2 }}
        >
          <TaskTab />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

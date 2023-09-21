import { Container, Grid, Typography } from "@mui/material";
import "../style.css";
import React from "react";
import TaskItem from "./taskItem";

export default function TaskTab() {
  return (
    <Grid
      container
      spacing={0}
      direction={"row"}
      alignContent={"center"}
      justifyContent={"center"}
      maxWidth={"lg"}
      sx={{ minHeight: "100%", minWidth: "100%", p: 2 }}
      className="task_tab"
    >
      <Grid item xs={10}>
        <Typography variant="h6" gutterBottom>
          Todo List
        </Typography>
      </Grid>
      dark mode button
      <Grid container>
        <Grid item>add icon</Grid>
        <Grid item></Grid>
      </Grid>
      <TaskItem />
    </Grid>
  );
}

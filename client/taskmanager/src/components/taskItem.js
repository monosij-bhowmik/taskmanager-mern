import { Grid } from "@mui/material";
import React from "react";

export default function TaskItem({ id, itemName, status, timestamp }) {
  return (
    <>
      <Grid container maxWidth={"lg"} sx={{ py: 2 }}>
        <Grid item xs={2}>
          ID
        </Grid>
        <Grid item xs={8}>
          Item Name
        </Grid>
        <Grid item xs={2}>
          Status
        </Grid>
      </Grid>
    </>
  );
}

import { Stack, TextField } from "@mui/material";
import React from "react";

const MuiTextField = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="name" />
          <TextField label="name" variant="filled" />
          <TextField label="name" variant="standard" />
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiTextField;

import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import React from "react";

import SendIcon from "@mui/icons-material/Send";
// npm install @mui/icons-material

const MuiButton = () => {
  return (
    <div>
      <Button> Text </Button>
      <Button variant="contained"> Text </Button>
      <Button variant="outlined"> Text </Button>

      <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondery
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          success
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* icon added */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("clickeed")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="text">
          <Button size="small">Left</Button>
          <Button size="small">Center</Button>
          <Button size="small">Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" size="small" color="secondary">
          <Button size="small">Left</Button>
          <Button size="small">Center</Button>
          <Button size="small">Right</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button onClick={() => alert("left btn")} size="small">
            Left1
          </Button>
          <Button size="small">Center1</Button>
          <Button size="small">Right1</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          color="warning"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left btn")} size="small">
            Left
          </Button>
          <Button size="small">Center</Button>
          <Button size="small">Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
};

export default MuiButton;

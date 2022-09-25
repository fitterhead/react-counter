import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
export default function CounterCard() {
  const [value, setValue] = useState(0);
  const color = () => {
    if (value < 0) {
      return "#C1666B";
    } else {
      return "#4281A4";
    }
  };
  const handleDecrease = () => {
    setValue(value - 1);
  };
  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  return (
    <Card elevation={20} sx={{ maxWidth: 345, maxHeight: 200 }}>
      <CardContent align="center">
        <Typography color={color} gutterBottom variant="h2" component="div">
          {value}
        </Typography>
        <ButtonGroup
          align="center"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              handleDecrease();
            }}
          >
            DECREASE
          </Button>
          <Button
            onClick={() => {
              handleReset();
            }}
          >
            RESET
          </Button>
          <Button
            onClick={() => {
              handleIncrease();
            }}
          >
            INCREASE
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

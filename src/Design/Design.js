import React from "react";
import DigitalClock from "./DigitalClock";
import HeadText from "./HeadText";
import Time from "./Time";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Design() {
  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState(!state);
  };
  return (
    <div>
      <HeadText />
      <FormControlLabel
        style={{ padding: "10px 0px" }}
        control={
          <Switch checked={state} onChange={handleChange} name="jason" />
        }
        label="Change Clock"
      />
      {state && <Time />}
      {!state && <DigitalClock />}
    </div>
  );
}

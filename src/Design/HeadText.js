import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function HeadText() {
  return (
    <div
      style={{
        fontFamily: "Permanent Marker",
        fontSize: "50px",
        color: "#00e836",
        marginTop: "-10px",
        padding: "0px",
      }}
    >
      <AccessTimeIcon style={{fontSize:"70px"}}/>
      <p style={{margin:"-10px"}}>The Clock</p>
    </div>
  );
}

import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./HeadText.css";

export default function HeadText() {
  return (
    <div
      style={{
        fontFamily: "Righteous",
        fontSize: "50px",
        marginTop: "-10px",
        padding: "0px",
      }}
    >
      <AccessTimeIcon style={{ color: "white", fontSize: "70px" }} />
      <p
        style={{ margin: "-10px", color: "red", marginBottom: "20px" }}
        id="headingText"
      >
        The Clock
      </p>
    </div>
  );
}

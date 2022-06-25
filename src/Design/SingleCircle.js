import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SingleCircle(prop) {
  const percentage = prop.data;
  return (
    <div style={{ width: 100, height: 100, padding: "20px 20px" }}>
      <CircularProgressbar value={percentage} text={`${prop.txt}`} />
      <p style={{ margin: "10px" }}>{prop.name}</p>
    </div>
  );
}

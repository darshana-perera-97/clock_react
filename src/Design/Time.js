import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Time() {
  const percentage = 66;
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  );
}

import React from "react";
import SingleCircle from "./SingleCircle";

export default function Time() {
  const [sec, seTSec] = React.useState(0);
  const [min, seTMin] = React.useState(0);
  const [hrs, seTHrs] = React.useState(0);
  const [s, setS] = React.useState(0);
  const [m, setM] = React.useState(0);
  const [h, setH] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();

      let h = (hh / 24) * 100;
      seTHrs(h);
      setH(hh);


      let m = (mm / 60) * 100;
      seTMin(m);
      setM(mm);

      let s = (ss / 60) * 100;
      seTSec(s);
      setS(ss);

    }, 1000);
  }, []);
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
      }}
    >
      <SingleCircle name={"hrs"} data={hrs} txt={h} />
      <SingleCircle name={"min"} data={min} txt={m} />
      <SingleCircle name={"sec"} data={sec} txt={s} />
    </div>
  );
}

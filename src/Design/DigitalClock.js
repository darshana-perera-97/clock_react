import React from "react";

export default function DigitalClock() {
  const [sec, seTSec] = React.useState(0);
  const [min, seTMin] = React.useState(0);
  const [hrs, seTHrs] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();

      seTSec(ss)
      seTMin(mm)
      seTHrs(hh)
    }, 1000);
  }, []);
  return (
    <div >
      <p
        style={{
          fontFamily: "Seven Segment",
          fontSize: "100px",
          margin: "0px",
        }}
      >
        {hrs} - {min} - {sec}    </p>
      
    </div>
  );
}

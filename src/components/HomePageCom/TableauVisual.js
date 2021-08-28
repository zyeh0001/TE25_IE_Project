import React, { useRef, useEffect } from "react";
const { tableau } = window;

function TableauVisual() {
  const url = "https://public.tableau.com/views/Sachida/Dashboard1";
  const ref = useRef(null);
  //   const options = {
  //     device: "desktop",
  //   };
  console.log(ref);

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      device: "desktop",
      width: "100%",
      height: "120vh",
    });
  };

  useEffect(initViz, []);

  return <div ref={ref}></div>;
}
export default TableauVisual;

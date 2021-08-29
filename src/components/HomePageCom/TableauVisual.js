import React, { useRef, useEffect } from "react";
const { tableau } = window;

function TableauVisual(props) {
  const url = props.link;
  const ref = useRef(null);
  // const options = {

  //   };
  // console.log(ref);

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      width: "100%",
      height: props.height,
    });
  };

  useEffect(initViz);

  return <div ref={ref}></div>;
}
export default TableauVisual;

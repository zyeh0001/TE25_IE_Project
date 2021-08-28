import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { useD3 } from "d3blackbox";
import us from "./visualData/counties-albers-10m.json";
import * as topojson from "topojson-client";

function drawMap(svg, data) {
  svg = svg.attr("viewBox", [0, 0, 975, 610]);

  const color = d3.scaleQuantize([1, 10], d3.schemeBlues[9]);
  const path = d3.geoPath();
  const format = (d) => `${d}%`;
  const states = new Map(
    us.objects.states.geometries.map((d) => [d.id, d.properties])
  );

  // svg
  //   .append("g")
  //   .attr("transform", "translate(610,20)")
  //   .append(() => legend({ color, title: data.title, width: 260 }));

  svg
    .append("g")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .join("path")
    .attr("fill", (d) => color(data.get(d.id)))
    .attr("d", path)
    .append("title")
    .text(
      (d) => `${d.properties.name}, ${states.get(d.id.slice(0, 2)).name}
${format(data.get(d.id))}`
    );

  svg
    .append("path")
    .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path);

  return svg.node();
}

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const csv = await d3.csv(
        "./visualData/unemployment-x.csv",
        ({ id, rate }) => [id, +rate]
      );
      const data = Object.assign(new Map(csv), {
        title: "Unemployment rate (%)",
      });
      setData(data);
    }
    loadData();
  });

  const svgRef = useD3((anchor) => {
    if (data !== null) {
      drawMap(d3.select(anchor), data);
    }
  });

  return (
    <div>
      <svg width="1024" height="1024" ref={svgRef} />
    </div>
  );
}

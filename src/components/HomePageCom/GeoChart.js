// import React, { useEffect, useState } from "react";
import { Component } from "react";
import * as d3 from "d3";

// import au from "./states.geojson";
import { queue } from "d3-queue";

class GeoChart extends Component {
  state = {
    map_json: null,
    skin_map: null,
  };

  componentWillMount() {
    // const data_map = d3.map();
    queue()
      .defer(d3.json, "states.geojson")
      .defer(d3.csv, "skin_cancer_data10-17.csv")
      .await((error, map_json, skin_map) => {
        console.log(map_json);
        console.log(skin_map);
        this.setState({ map_json, skin_map });
      });
  }
  //   componentDidUpdate() {
  //     const svg = d3.select(this.refs.anchor),
  //       { width, height } = this.props;
  //     const projection = d3
  //       .geoAlbers()
  //       .center([132, -28])
  //       .scale(1000)
  //       .translate([width / 2, height / 2]);
  //     const path = d3.geoPath(projection);
  //     // color Scale setup
  //     const colors = [
  //       "#ffffcc",
  //       "#ffeda0",
  //       "#fed976",
  //       "#feb24c",
  //       "#fd8d3c",
  //       "#fc4e2a",
  //       "#e31a1c",
  //       "#bd0026",
  //       "#800026",
  //     ];
  //     const all_values = this.state.data_map.values().map(function (d) {
  //       //   console.log(d["value"]);
  //       return d["value"];
  //     });

  //     // Quantile scale
  //     const color_scale = d3.scaleQuantile().domain(all_values).range(colors);

  //     const Lga = this.state.map_json["features"];
  //     // The map
  //     svg
  //       .selectAll("path")
  //       .data(Lga)
  //       .enter()
  //       .append("path")
  //       .attr("d", path)
  //       .style("fill", function (d) {
  //         const state_code = d["properties"]["STATE_CODE"];
  //         const skin_cancer_data = this.state.data_map.get(state_code);
  //         // console.log(skin_cancer_data);
  //         if (this.state.data_map.has(state_code)) {
  //           // Get the entire row of poverty data for each FIPS code
  //           skin_cancer_data = this.state.data_map.get(state_code);

  //           // Get the specific feature
  //           const data = skin_cancer_data["value"];

  //           return color_scale(data);
  //         } else {
  //           return "#d9d9d9";
  //         }
  //       })
  //       .style("opacity", 0.8)
  //       .style("stroke", "black")
  //       .style("stroke-width", 1)
  //       .style("stroke-opacity", 0.2)
  //       .on("mouseover", function (d) {
  //         // Make the lga stroke color change
  //         d3.select(this)
  //           .style("opacity", 1)
  //           .style("stroke", "#810f7c")
  //           .style("stroke-width", 1)
  //           .style("stroke-opacity", 1);

  //         //prepare data
  //         const state_code = d["properties"]["STATE_CODE"];
  //         // console.log(state_code);
  //         const name = {};
  //         const skin_cancer_cases = {};
  //         if (this.state.data_map.has(state_code)) {
  //           const skin_cancer_data = this.state.data_map.get(state_code);
  //           name = skin_cancer_data["State"];
  //           skin_cancer_cases = parseInt(skin_cancer_data["value"]);
  //           console.log(name);
  //           console.log(skin_cancer_cases);
  //           // Show the tooltip
  //           d3.select(".tooltip")
  //             .style("visibility", "visible")
  //             // .style("top", d3.event.pageY + 10 + "px")
  //             // .style("left", d3.event.pageX + 10 + "px")
  //             .html(
  //               "<strong>" +
  //                 name +
  //                 "</strong><br />Malinoma cases: " +
  //                 skin_cancer_cases
  //             );

  //           //   document.getElementById("sub_pop").innerHTML =
  //           //     "Malinoma skin cancer cases: " + skin_cancer_cases;
  //         } else {
  //           d3.select(".tooltip")
  //             .style("visibility", "visible")
  //             // .style("top", d3.event.pageY + 10 + "px")
  //             // .style("left", d3.event.pageX + 10 + "px")
  //             .html("<strong> No Data</strong>");
  //         }
  //       })
  //       .on("mouseout", function (d) {
  //         // Make the county usual opacity again
  //         d3.select(this)
  //           .style("opacity", 0.8)
  //           .style("stroke", "black")
  //           .style("stroke-width", 0.8)
  //           .style("stroke-opacity", 0.2);

  //         // Hide the tooltip
  //         d3.select(".tooltip").style("visibility", "hidden");
  //         //change the color back
  //         d3.select(this).style("fill", function (d) {
  //           const state_code = d["properties"]["STATE_CODE"];

  //           // Color only if the data exists for the FIPS code
  //           if (this.state.data_map.has(state_code)) {
  //             // Get the entire row of poverty data for each FIPS code
  //             const skin_cancer_data = this.state.data_map.get(state_code);

  //             // Get the specific feature
  //             const data = skin_cancer_data["value"];

  //             return color_scale(data);
  //           } else {
  //             return "#d9d9d9";
  //           }
  //         });
  //       });
  //   }

  render() {
    const { map_json, skin_map } = this.state;
    if (!map_json || !skin_map) {
      return null;
    }
    return <g ref="anchor" />;
  }
}
export default GeoChart;

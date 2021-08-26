import rd3 from "react-d3-library";

var data_map = d3.map();
d3.queue()
  .defer(d3.json, "states.geojson")
  .defer(d3.csv, "au_lga_population.csv", function (d) {
    // Convert to number
    d["2019ERP"] = +d["2019ERP"];
    return data_map.set(d["LGAcode"], d);
  })
  .await(function (error, map_json, pop_map) {
    // console.log(pop_map);
    var Lga = map_json["features"];
    // console.log(Lga);
    var width = 900,
      height = 600;
    var svg = d3
      .select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Geography setup
    var proj = d3
      .geoMercator()
      .center([132, -28])
      .scale(1000)
      .translate([width / 2, height / 2]);

    var path_gen = d3.geoPath(proj);

    // The map
    svg
      .selectAll("path")
      .data(Lga)
      .enter()
      .append("path")
      .attr("d", path_gen)
      .style("fill", function (d) {
        lga_code = d["properties"]["STATE_NAME"];

        // Color only if the data exists for the FIPS code
        if (data_map.has(lga_code)) {
          // Get the entire row of poverty data for each FIPS code
          population_data = data_map.get(lga_code);

          // Get the specific feature
          data = population_data["2019ERP"];

          return color_scale(data);
        } else {
          return "#d9d9d9";
        }
      })
      .style("opacity", 0.8)
      .style("stroke", "black")
      .style("stroke-width", 1)
      .style("stroke-opacity", 0.2)
      .on("mouseover", function (d) {
        // Make the lga stroke color change
        d3.select(this)
          .style("opacity", 1)
          .style("stroke", "#810f7c")
          .style("stroke-width", 1)
          .style("stroke-opacity", 1);

        //prepare data
        lga_code = d["properties"]["STATE_NAME"];
        var name;
        var density_rate;
        if (data_map.has(lga_code)) {
          population_data = data_map.get(lga_code);
          name = population_data["LGA"];
          density_rate = parseInt(population_data["2019ERP"]);
          // Show the tooltip
          d3.select(".tooltip")
            .style("visibility", "visible")
            .style("top", d3.event.pageY + 10 + "px")
            .style("left", d3.event.pageX + 10 + "px")
            .html(
              "<strong>" + name + "</strong><br />population: " + density_rate
            );

          document.getElementById("sub_pop").innerHTML =
            "Local Government Area population: " + density_rate;
        } else {
          d3.select(".tooltip")
            .style("visibility", "visible")
            .style("top", d3.event.pageY + 10 + "px")
            .style("left", d3.event.pageX + 10 + "px")
            .html("<strong> No Lga Data</strong>");
        }
      })
      .on("mouseout", function (d) {
        // Make the county usual opacity again
        d3.select(this)
          .style("opacity", 0.8)
          .style("stroke", "black")
          .style("stroke-width", 0.8)
          .style("stroke-opacity", 0.2);

        // Hide the tooltip
        d3.select(".tooltip").style("visibility", "hidden");
        //change the color back
        d3.select(this).style("fill", function (d) {
          lga_code = d["properties"]["STATE_NAME"];

          // Color only if the data exists for the FIPS code
          if (data_map.has(lga_code)) {
            // Get the entire row of poverty data for each FIPS code
            population_data = data_map.get(lga_code);

            // Get the specific feature
            data = population_data["2019ERP"];

            return color_scale(data);
          } else {
            return "#d9d9d9";
          }
        });
      });
  });

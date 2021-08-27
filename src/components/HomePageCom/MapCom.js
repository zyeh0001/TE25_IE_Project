import classes from "./MapCom.module.css";

const { useState, useEffect, useRef } = React;

const drawSvg = ({ inputRef, width, height, education, counties }) => {
  const container = d3.select(inputRef.current);
  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const tooltip = container
    .append("div")
    .attr("class", "tooltip")
    .attr("id", "tooltip")
    .style("opacity", 0);

  const unemployment = d3.map();
  const path = d3.geoPath();

  const x = d3.scaleLinear().domain([2.6, 75.1]).rangeRound([600, 860]);

  const color = d3
    .scaleThreshold()
    .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
    .range(d3.schemeBlues[9]);

  const g = svg
    .append("g")
    .attr("class", "key")
    .attr("id", "legend")
    .attr("transform", "translate(0,40)");

  g.selectAll("rect")
    .data(
      color.range().map((d) => {
        d = color.invertExtent(d);
        if (!d[0]) {
          d[0] = x.domain()[0];
        }
        if (!d[1]) {
          d[1] = x.domain()[1];
        }
        return d;
      })
    )
    .enter()
    .append("rect")
    .attr("height", 8)
    .attr("x", (d) => x(d[0]))
    .attr("width", (d) => x(d[1]) - x(d[0]))
    .attr("fill", (d) => color(d[0]));

  g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold");

  g.call(
    d3
      .axisBottom(x)
      .tickSize(13)
      .tickFormat((x) => Math.round(x) + "%")
      .tickValues(color.domain())
  )
    .select(".domain")
    .remove();

  svg
    .append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(counties, counties.objects.counties).features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("data-fips", (d) => d.id)
    .attr("data-education", (d) => {
      const result = education.filter((obj) => obj.fips == d.id);
      if (result[0]) {
        return result[0].bachelorsOrHigher;
      }
      // Could not find result
      return null;
    })
    .attr("fill", (d) => {
      const result = education.filter((obj) => obj.fips == d.id);
      if (result[0]) {
        return color(result[0].bachelorsOrHigher);
      }
      // Could not find result
      return color(0);
    })
    .attr("d", path)
    .on("mouseover", (d) => {
      tooltip.style("opacity", 0.9);
      tooltip
        .html(() => {
          const result = education.filter((obj) => obj.fips == d.id);
          if (result[0]) {
            return `${result[0].area_name}, ${result[0].state}: ${result[0].bachelorsOrHigher}%`;
          }
          // Could not find result
          return null;
        })
        .attr("data-education", () => {
          const result = education.filter((obj) => obj.fips == d.id);
          if (result[0]) {
            return result[0].bachelorsOrHigher;
          }
          // could not find a matching fips id in the data
          return 0;
        })
        .style("left", `${d3.event.pageX + 10}px`)
        .style("top", `${d3.event.pageY - 28}px`);
    })
    .on("mouseout", (d) => {
      tooltip.style("opacity", 0);
    });

  svg
    .append("path")
    .datum(topojson.mesh(counties, counties.objects.states, (a, b) => a !== b))
    .attr("class", "states")
    .attr("d", path);
};

const Topography = (props) => {
  const { counties, education } = props;
  const inputRef = useRef(null);
  const [hasRendered, setRender] = useState(false);

  useEffect(() => {
    if (!hasRendered && counties && education) {
      drawSvg({ inputRef, ...props });
      setRender(true);
    }
  });

  return <div id="graph-container" ref={inputRef} />;
};

const App = (props) => {
  const [education, setEducation] = useState(null);
  const [counties, setCounties] = useState(null);
  const educationUrl =
    "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json";
  const countiesUrl =
    "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json";

  useEffect(() => {
    if (!education) {
      axios.get(educationUrl).then(({ data }) => {
        setEducation(data);
      });
    }
  }, education);

  useEffect(() => {
    if (!counties) {
      axios.get(countiesUrl).then(({ data }) => {
        setCounties(data);
      });
    }
  }, counties);

  return (
    <div id="container">
      <h1>United States Educational Attainment</h1>

      <Topography
        width={1000}
        height={600}
        education={education}
        counties={counties}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#react-mount"));

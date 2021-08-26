// import GeoChart from "./GeoChart";

function MapVisual(props) {
  return (
    <div>
      <div className="container" id="main">
        <article id="content">
          <header>
            <h2>No Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur et sed adipiscing elit
              dolor neque semper.
            </p>
          </header>
          <div>
            <svg width="900" height="600">
              {/* <GeoChart width={900} height={600} /> */}
            </svg>
          </div>
          <p>
            Every year, GPs provide over a million consultations to skin cancer
            patients. The rate of skin cancer in Australia is among the highest
            in the world. ...
          </p>
          <p>
            Some Australians are adamant about ignoring the advice and staying
            completely in the sun to keep their tan. This is one of the reasons
            Australia's skin cancer rate is so high. ...
          </p>
          <p>
            Each year, skin cancer accounts for nearly 80% of all new cancer
            cases diagnosed in Australia.
          </p>
        </article>
      </div>
    </div>
  );
}

export default MapVisual;

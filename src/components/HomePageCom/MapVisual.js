// import Map from "./Map";
import TableauVisual from "./TableauVisual";
function MapVisual(props) {
  return (
    <div>
      <div className="container aln-center" id="main">
        <article id="content">
          <header>
            <h2>So Many Skin cancer cases</h2>
            <p>
              The incidence of skin cancer in Australia has always been the
              highest in the world, which not only brings great troubles to the
              lives of Australian residents, but also makes Australia labeled
              with skin cancer by other countries
            </p>
          </header>
        </article>
        <div className="container">
          <TableauVisual />
        </div>
        <article id="content">
          <p>
            As can be easily seen from the graph above, Queensland has the
            highest incidence of skin cancer in Australia. The bright colors
            represent not the prosperity of the city, but the call of death.
          </p>
          <p>
            We need to raise the awareness of australians to protect their skin.
            To protect them from skin cancer.
          </p>
          <p>
            So what exactly should we do? You can follow our guide on how to
            protect your skin.
          </p>
        </article>
      </div>
    </div>
  );
}

export default MapVisual;

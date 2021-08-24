import { Link } from "react-router-dom";
function HomeImage() {
  return (
    <div id="header-wrapper">
      <div>
        <section id="hero" className="container">
          <header>
            <h2>
              {/* Do you have Spot getting under your skin? */}
              Are you having trouble with your moles ?
              <br />
              {/* <br />
              It can be fatal! */}
            </h2>
          </header>
          <p>
            Skin care is never too late
            <br />
            Lets try our free skin cancer detection tool
          </p>
          <ul className="actions">
            <li>
              <Link to="/self-check" className="button">
                Check Your Spot!
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
export default HomeImage;

import { Link } from "react-router-dom";
function HomeImage() {
  return (
    <div id="homeImg-wrapper" className="bg_cover align-items-center">
      <div>
        <section id="hero" className="container">
          <header>
            <h2>
              Are you having trouble with your moles ?
              <br />
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

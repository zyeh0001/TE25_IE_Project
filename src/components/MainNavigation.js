import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
      <div id="header-wrapper">
        <div id="header" className="container"></div>

        <h1 id="logo">
          <Link to="/">Skindicator</Link>
        </h1>

        <nav id="nav">
          <ul>
            <li>
              <Link to="#">Support</Link>
              <ul>
                <li>
                  <Link to="/medical-support">Medical support</Link>
                </li>
                <li>
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Skin Health</Link>
              <ul>
                <li>
                  <Link to="/symptom">Symptoms</Link>
                </li>
                <li>
                  <Link to="/healthy-tips">Healthy Tips</Link>
                </li>
              </ul>
            </li>
            <li className="break">
              <Link to="/self-check">Self Check</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default MainNavigation;

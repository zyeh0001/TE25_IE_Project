import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div id="footer-wrapper">
        <div id="footer" className="container"></div>
        <div id="copyright" className="container">
          <ul className="menu">
            <li>
              <Link to="/disclaimer">Medical Disclaimer</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/about-us">Contect us</Link>
            </li>

            <li>
              <section className="col-3 col-12-narrower">
                <div className="row gtr-0">
                  <ul className="divided icons">
                    <li className="icon brands fa-facebook-f">
                      <Link to="/#"></Link>
                    </li>
                  </ul>
                  <ul className="divided icons">
                    <li className="icon brands fa-instagram">
                      <Link to="/#"></Link>
                    </li>
                  </ul>
                  <ul className="divided icons">
                    <li className="icon brands fa-twitter">
                      <Link to="/#"></Link>
                    </li>
                  </ul>
                </div>
              </section>
            </li>
          </ul>
          <ul className="menu">
            <li>&copy; Untitled. All rights reserved.</li>
            <li>
              Design: <Link to="http://html5up.net">HTML5 UP</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

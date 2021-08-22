import { Link } from "react-router-dom";
function Section3() {
  return (
    <div>
      <section className="col-4 col-12-narrower feature">
        <div className="image-wrapper first">
          <Link to="/self-check" className="image featured">
            <img src="images/pic03.jpg" alt="" />
          </Link>
        </div>
        <header>
          <h3>Symptom and lassification</h3>
        </header>
        <p>something</p>
        <ul className="actions">
          <li>
            <Link to="/#" className="button">
              elevate our awareness
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Section3;

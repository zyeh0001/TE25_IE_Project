import { Link } from "react-router-dom";
function Section5() {
  return (
    <div>
      <section className="col-md-1">
        <div className="image-wrapper first">
          <Link to="/self-check" className="image">
            <img src="images/charles.png" alt="" />
          </Link>
        </div>
        <header>
          <h3>Symptom</h3>
        </header>
        <p>something</p>
      </section>
    </div>
  );
}
export default Section5;

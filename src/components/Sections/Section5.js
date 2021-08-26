import { Link } from "react-router-dom";
function Section5(props) {
  return (
    <div>
      <section className="col-md-2">
        <div className="image-wrapper first">
          <Link to="/self-check" className="image">
            <img src={props.image} alt="" />
            {/* images/charles.png */}
          </Link>
        </div>
        <header>
          <h3>{props.name}</h3>
        </header>
        <p>{props.intro}</p>
      </section>
    </div>
  );
}
export default Section5;

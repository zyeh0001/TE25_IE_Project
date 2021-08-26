import { Link } from "react-router-dom";
function Section3(props) {
  return (
    <div>
      <section className="col-4 col-12-narrower feature">
        <div className="image-wrapper first">
          <Link to="/self-check" className="image featured">
            <img src={props.image} alt="" />
          </Link>
        </div>
        <h3>
          <Link to="/#">{props.title}</Link>
        </h3>

        <p>{props.text}</p>
      </section>
    </div>
  );
}
export default Section3;

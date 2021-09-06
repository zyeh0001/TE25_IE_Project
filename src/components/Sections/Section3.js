import { Link } from "react-router-dom";
function Section3(props) {
  return (
    <div className="col-3  feature">
      <section>
        <div className="image-wrapper">
          <Link to={props.link} className="image featured">
            <img
              src={props.image}
              alt=""
              style={{
                width: "350px",
                height: "250px",
              }}
            />
          </Link>
        </div>

        <div
          style={{
            width: "350px",
          }}
        >
          <h3>
            <Link to={props.link}>{props.title}</Link>
          </h3>
          <p
            style={{
              width: "350px",
            }}
          >
            {props.text}
          </p>
        </div>
      </section>
    </div>
  );
}
export default Section3;

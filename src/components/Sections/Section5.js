import { Link } from "react-router-dom";
function Section5(props) {
  return (
    <div>
      <section className="col-4 col-12-narrower">
        <div className="image-wrapper">
          <Link to="/self-check" className="image">
            <img
              src={props.image}
              alt=""
              style={{
                width: "200px",
                height: "280px",
              }}
            />
          </Link>
        </div>
        <header>
          <h3>{props.name}</h3>
        </header>
        <p
          style={{
            width: "200px",
          }}
        >
          {props.intro}
        </p>
      </section>
    </div>
  );
}
export default Section5;

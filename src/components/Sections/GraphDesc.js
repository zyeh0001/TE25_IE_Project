import React from "react";

function GraphDesc(props) {
  return (
    <div>
      <article id="content">
        <p>{props.text}</p>
        <header>
          <h2 className="feature">{props.title}</h2>
        </header>

        <p>{props.text3}</p>
        <p className="sub-feature">{props.text4}</p>
        <br></br>
      </article>
    </div>
  );
}

export default GraphDesc;

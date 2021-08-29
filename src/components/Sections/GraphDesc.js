import React from "react";

function GraphDesc(props) {
  return (
    <div>
      <article id="content">
        <p>{props.text}</p>
        <header>
          <h2 className="feature">{props.title}</h2>
        </header>
        <p className="sub-feature">{props.text3}</p>
        <br></br>
      </article>
    </div>
  );
}

export default GraphDesc;

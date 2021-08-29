import React from "react";

function GraphDesc(props) {
  return (
    <div>
      <article id="content">
        <header>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </header>
      </article>
    </div>
  );
}

export default GraphDesc;

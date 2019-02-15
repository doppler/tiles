import React from "react";

const Background = () => (
  <div id="Background">
    {Array.from({ length: 100 }).map((_, i) => (
      <div className="Cell" key={i} />
    ))}
  </div>
);

export default Background;

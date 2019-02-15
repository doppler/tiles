import React, { useState, useEffect } from "react";

const Background = () => {
  const [numSquares, setNumSquares] = useState(10);

  const changeNumSquares = () => {
    const b = document.getElementById("Background");
    const squareWidth = b.offsetWidth / 10 - 2;
    setNumSquares((b.offsetHeight / squareWidth) * 10 + 10);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      changeNumSquares();
    });
    changeNumSquares();
  }, []);

  return (
    <div id="Background">
      {Array.from({ length: numSquares }).map((_, i) => (
        <div
          className="Cell"
          key={i}
          style={{
            transform: `rotate(${(numSquares / 90) * 9 * i}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default Background;

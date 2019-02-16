import React, { useState, useEffect } from "react";

const Background = () => {
  const [numSquares, setNumSquares] = useState(10);
  const [rotation, setRotation] = useState(0);

  const changeNumSquares = () => {
    const b = document.getElementById("Background");
    const squareWidth = b.offsetWidth / 10 - 2;
    setNumSquares((b.offsetHeight / squareWidth) * 10 + 10);
  };

  const incrementRotation = () => {
    setRotation(rotation === 359 ? 0 : rotation + 1);
  };

  useEffect(() => {
    requestAnimationFrame(incrementRotation);
  }, [rotation]);

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
            transform: `rotate(${i + rotation}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default Background;

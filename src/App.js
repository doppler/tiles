import React, { useState, useEffect } from "react";
import Background from "./Background";
import "./App.scss";

const App = () => {
  const [hue, setHue] = useState(180);

  const handleHueSliderChange = event => setHue(Number(event.target.value));

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", hue);
  }, [hue]);

  return (
    <div id="App">
      <Background />
      <div id="Content">
        <h1>Hello, World!</h1>
        <input
          type="range"
          min={0}
          max={359}
          value={hue}
          onChange={handleHueSliderChange}
        />
        <p>
          <output>{JSON.stringify({ hue }, null, 2)}</output>
        </p>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Background from "./Background";
import "./App.scss";

const App = () => {
  const [hue, setHue] = useState(0);

  const handleHueSliderChange = event => setHue(Number(event.target.value));

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", hue);
  }, [hue]);

  return (
    <div id="App">
      <Background />
      <div id="Content">
        <input
          type="range"
          min={0}
          max={359}
          value={hue}
          onChange={handleHueSliderChange}
        />
      </div>
    </div>
  );
};

export default App;

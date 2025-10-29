import { useState } from "react";

function Toggler() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>

      <p>Status: {isOn ? "ON" : "OFF"}</p>

      {isOn && (
        <div style={{ backgroundColor: "pink" }}>
          Lorem ipsum dolor sit amet consectetur,
        </div>
      )}
    </div>
  );
}

export default Toggler;

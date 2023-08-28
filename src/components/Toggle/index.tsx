import { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <button type="submit" onClick={() => setOn(!on)}>
      {on ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;

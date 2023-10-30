import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const changeButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : `${buttonColor}` }}
        onClick={() => setButtonColor(changeButtonColor)}
        disabled={disabled}
      >
        Change to {changeButtonColor}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

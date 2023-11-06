import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export const replaceCamelwithSpaces = (colorName) => {
  let arr = [...colorName];
  return arr
    .map((s) => (s === s.toUpperCase() && arr.indexOf(s) !== 0 ? ` ${s}` : s))
    .join("");
};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");

  const changeButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : `${buttonColor}` }}
        onClick={() => setButtonColor(changeButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelwithSpaces(changeButtonColor)}
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

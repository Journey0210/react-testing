import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const changeButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: `${buttonColor}` }}
        onClick={() => setButtonColor(changeButtonColor)}
      >
        Change to {changeButtonColor}
      </button>
    </div>
  );
}

export default App;

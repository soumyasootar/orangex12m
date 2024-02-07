import { useState } from "react";
import "./App.css";
import YesNo from "./YesNo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container flex items-start pt-28 justify-center font-gaegu">
        <YesNo />
      </div>
    </>
  );
}

export default App;

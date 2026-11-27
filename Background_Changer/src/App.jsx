import { useState } from "react";
import "./App.css";

// import Colour from './Components/Colour'

function App() {
  const [Colour, setColour] = useState("olive");

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: Colour }}>
      <button
        onClick={() => setColour("red")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 m-5 rounded shadow"
      >
        Red
      </button>
      <button
        onClick={() => setColour("blue")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 m-5 rounded shadow"
      >
        Blue
      </button>
      <button
        onClick={() => setColour("green")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 m-5 rounded shadow"
      >
        Green
      </button>
      <button
        onClick={() => setColour("brown")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 m-5 rounded shadow"
      >
        Brown
      </button>
    </div>
  );
}

export default App;

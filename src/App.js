import React from "react";
import Home from "./components/Home";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import ColorList from "./components/ColorList";
import { useState } from "react";
import Form from "./components/Form";
import Color from "./components/Color";

function App() {
  const [colors, setColors] = useState([{name:"red", value:"#ff0000"}, {name:"light-pink", value:"#FFB6C1"}]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="colors" element={<ColorList colors={colors}/>}></Route>
        <Route path="colors/new" element={<Form handleColors={setColors} colors={colors}/>}/>
        <Route path="colors/:name" element={<Color/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

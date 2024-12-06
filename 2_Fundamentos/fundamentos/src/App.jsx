import { useState } from "react";
import { React } from "react";
//Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/templateExpression";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
//CSS
import "./App.css";

function App() {
  return (
    <div>
      <h1>Component Principal</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;

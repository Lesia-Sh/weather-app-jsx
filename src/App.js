import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <div className="Open-sourse">
          It was coded by Lesia Shevchuk and is{" "}
          <a
            href="https://github.com/Lesia-Sh/weather-app-jsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourse
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

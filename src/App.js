import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />

        <footer>This project was coded by Naomi Laufer</footer>
      </div>
    </div>
  );
}

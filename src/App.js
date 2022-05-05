import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <Dictionary />
      <p className="footer">
        Built by Maria Bodwell. View on{" "}
        <a
          href="https://github.com/mar1ab/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

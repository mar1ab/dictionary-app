import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <h1 className="title">Let's look it up!</h1>
      <img
        className="cat-img"
        src="https://i0.wp.com/aaronsanimals.com/wp-content/uploads/2015/08/Look_At_Me_I_Love_Reading1.gif?ssl=1"
      />
      <Dictionary defaultKeyword="dictionary" />
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

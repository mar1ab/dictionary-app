import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container-sm">
      <h1 className="title">Let's look it up!</h1>
      <img
        className="cat-img"
        src="https://i0.wp.com/aaronsanimals.com/wp-content/uploads/2015/08/Look_At_Me_I_Love_Reading1.gif?ssl=1"
        alt="researching cat"
      />
      <Dictionary defaultKeyword="cat" />
      <p className="footer mb-4">
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

import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="phonetic-link"
      >
        Listen
      </a>
      <p className="phonetic-text">{props.phonetic.text}</p>
    </div>
  );
}

import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid image"
                    alt="example"
                  />
                </a>
              </div>
            );
          })}
        </div>
        Photos provided by{" "}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noreferrer"
          className="pexels-link"
        >
          Pexels
        </a>
      </section>
    );
  } else {
    return null;
  }
}

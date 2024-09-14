import React from "react";
import "./Dictionary.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <section className="Pictures">
        <div className="row">
          {props.pictures.map(function (picture, index) {
            return (
              <div className="col-sm-4 pt-3 pb-2">
                <a href={picture.url} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid Pictures"
                    key={index}
                    alt={picture.alt}
                    src={picture.src.landscape}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <>
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <p>
          <Examples example={props.meaning.example} />
        </p>
        <p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </>
  );
}

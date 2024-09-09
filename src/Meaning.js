import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>
        <Examples example={props.meaning.example} />
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </>
  );
}

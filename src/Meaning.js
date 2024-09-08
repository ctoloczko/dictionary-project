import React from "react";

export default function Meaning(props) {
  if (props.meaning.example) {
    return (
      <>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <p>
          <strong>Examples:</strong> {props.meaning.example}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
      </>
    );
  }
}

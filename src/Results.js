import React from "react";
import Meaning from "./Meaning";
import { Blocks } from "react-loader-spinner";

export default function Results(props) {
  if (props.results) {
    return (
      <>
        <h2>{props.results.word}</h2>
        <h>[ {props.results.phonetic} ]</h>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <div className="centered-container">
        <Blocks
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
  }
}

import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <>
      <form id="Form" onSubmit={search}>
        <input
          id="input"
          placeholder="Enter your word . . ."
          type="search"
          onChange={handleKeywordChange}
          autoFocus
        />
      </form>

      <Results results={results} />
    </>
  );
}

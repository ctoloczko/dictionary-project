import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
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
      <form onSubmit={search}>
        <input
          placeholder="Enter your word . . ."
          type="search"
          onChange={handleKeywordChange}
        />
      </form>
    </>
  );
}

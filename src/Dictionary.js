import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching fo ${keyword}`);
    console.log(event);
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

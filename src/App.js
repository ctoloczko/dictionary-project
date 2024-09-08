import React from "react";
import "./App.css";
import reading from "./reading.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Header d-flex align-items-center">
        <div className="vertical-text">
          <p className="vertical-text-content">
            Image by{" "}
            <a
              href="https://www.freepik.com/author/catalyststuff"
              target="_blank"
              rel="noopener noreferrer"
            >
              catalyststuff
            </a>{" "}
            on{" "}
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>
        </div>

        <div>
          <a
            href="https://www.freepik.com/free-vector/cute-girl-reading-book-cartoon-vector-icon-illustration-people-education-icon-concept-isolated-flat_59986662.htm#fromView=search&page=2&position=32&uuid=b68e62e6-b774-4684-9f71-9ec49847362b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="Logo"
              src={reading}
              alt="Cute girl reading book cartoon"
            />
          </a>
        </div>
        <div>
          <h1>Dictionary</h1>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Button from "../ui/Button";

function Header() {
  return (
    <header
      className="site-header"
      style={{ padding: "1rem 2rem", borderBottom: "1px solid #ddd" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>My Website</h1>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
            Simple header example
          </p>
        </div>
        <nav>
          <a
            href="#home"
            style={{
              margin: "0 0.75rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              margin: "0 0.75rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              margin: "0 0.75rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            Contact
          </a>

          <Button text={"Login"} bgColor={"green"} />
          <Button text={"Register"} bgColor={"red"} />
        </nav>
      </div>
    </header>
  );
}

export default Header;

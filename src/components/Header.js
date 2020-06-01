import React from "react";
import logo from "../DatacieLogo.png";

export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Translating Documents into Knowledge.</p>
      <h3>Datacie, Inc.</h3>
    </header>
  );
}

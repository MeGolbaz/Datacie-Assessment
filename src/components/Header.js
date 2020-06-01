import React from "react";

import logo from "../DatacieLogo.png";

export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p font-family={'Campton-Book'}>Translating Documents into Knowledge.</p>
      <h4 font-family={'Campton-Book'}>Datacie, Inc.</h4>
    </header>
  );
}

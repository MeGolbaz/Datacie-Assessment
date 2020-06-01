import React from "react";
import { Container, Row } from "react-grid-system";
import "./App.css";
import { TotalAssets } from "./components/TotalAssets";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DebtRatio } from "./components/DebtRatio";
import { AssetsVsLiabilities } from "./components/AssetsVsLiabilities";

function App() {
  return (
    <Container fluid >
      <Row >
        <Header />
      </Row>
      <Row justify="center">
        <AssetsVsLiabilities />
      </Row>
      <Row justify="center">
        <TotalAssets />
      </Row>
      <Row justify="center">
        <DebtRatio />
      </Row>
      <Row justify="center" className="Footer">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;







